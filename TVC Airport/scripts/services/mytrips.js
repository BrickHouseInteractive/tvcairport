angular.module('tvcairport').service('MyTrips', ['$http', 
      function ($http){
		return{
                  id:"new",
                  trip: {},
                  db: null,
                  saveTrip: function(cb){
                        var self = this;
                        var trip = this.trip;
                        if(this.id == "new"){ 
                          this.db.transaction(function(transaction) { 
                                  transaction.executeSql('INSERT INTO TVC_Trip(name, summary, data) VALUES (?,?,?)',
                                    [trip.tripName,"",angular.toJson(trip)]);
                          },this.errorCb,this.successCb);

                          this.db.transaction(function(transaction) {
                            transaction.executeSql('SELECT id FROM TVC_Trip ORDER BY id DESC;', [], 
                            function(transaction, result) { 
                                  self.id = result.rows.item(0).id;
                            });
                          },this.errorCb,cb);
                        }else{
                          this.db.transaction(function(transaction) {
                                  transaction.executeSql("UPDATE TVC_Trip SET name=?, summary=?, data=? WHERE id="+ self.id,
                                    [trip.tripName,"",angular.toJson(trip)]);
                          },this.errorCb,cb);    
                        }
                  },
                  getTrips: function(cb){
                         this.db.transaction(function(transaction) { 
                           transaction.executeSql('SELECT * FROM TVC_Trip ORDER BY id DESC;', [], 
                               function(transaction, result) {
                                    var trips = [];
                                    var len = result.rows.length;
                                    for(i=0;i<len;i++){
                                          trips.push(angular.copy(result.rows.item(i)));
                                          trips[i]["data"] = angular.fromJson(trips[i]["data"]);
                                    }
                                    cb(trips);
                                }); 
                         },this.errorCb,this.successCb); 
                  },
                  newTrip: function(cb){
                        this.id = "new";
                  	$http.get('data/trip-template.json').success(function(data, status, headers, config) {
                  		this.trip = data;
                  		cb();
                  	}.bind(this))
                  },
                  editTrip: function(){

                  },
                  initDB: function(){
                        // This alert is used to make sure the application is loaded correctly 
                        //alert("DEBUGGING: we are in the onBodyLoad() function"); 
                        if (!window.openDatabase) { 
                           alert('Databases are not supported in this browser.'); 
                           return; 
                        } 
                        // Create DB
                        if (window.sqlitePlugin !== undefined) {
                                this.db = window.sqlitePlugin.openDatabase("TVC_Airport");
                            } else {
                                // For debugging in simulator fallback to native SQL Lite
                                this.db = window.openDatabase("DB", "1.0", "TVC_Airport", 200000);
                            }
                       //Create TVC_Trip table in DB
                       this.db.transaction(function(tx){
                         tx.executeSql( 'CREATE TABLE IF NOT EXISTS TVC_Trip(id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, summary LONGTEXT, data LONGTEXT)');        
                       });
                  },
                  successCb: function(){

                  },
                  errorCb: function(data){
                        console.log("Error: ", data)
                  }
            }
	}
])