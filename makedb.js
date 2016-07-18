console.log('--start--');
console.log(__dirname + '/b.sqlite');

var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(__dirname + '/sqlite3.db')  //(':memory:');

// JADE IS THE CHROME APP

// Create some tables
db.serialize(function() {
  db.run("CREATE TABLE users   (uid TEXT, uname TEXT)");
  db.run("CREATE TABLE friends (fid TEXT, grp TEXT)");


// Insert rows
  // Prepare
  var stmt = db.prepare("INSERT INTO users (uid, uname) VALUES(?,?)");

  // Run lots of times
  stmt.run('geoff01','geoff01');
  stmt.run('cristina01','Cristina Herbert');
  stmt.run('roberto01','Roberto Moguel');
  stmt.run('susana01','Susana Moguel');

  stmt.finalize();
  
 // Delete a row
  //var strm = db.prepare("delete from users where uid = 'trash'");
  
  
  //db.each("SELECT rowid AS id, info FROM lorem", function(err, row) {
    //  console.log(row.id + ": " + row.info);
  //});

});

db.close();

console.log('--end--');


/* 
var   users = [{ uid:   "geoff01",
                 uname: "Geoff Herbert", 
                 city:  "Bellevue",
								 age:		"40ish",
                 friends: [
									 {uid:		"roberto01",  
										uname: 	"Roberto Moguel", 
                    group: 	"Geoffs Friends"},
									 {uid:		"susana01",  
										uname: 	"Susana Moguel", 
                    group: 	"Geoffs Friends"},
									 {uid:		"noah01",
										uname: 	"Noah Thomas",
                    group: 	"Geoffs Friends"},
									 {uid:		"marcus01",
										uname:  "Marcus V Burns",
                    group: 	"Geoffs Family"},
									 {uid:		"cristina01",
										uname:  "Cristina Herbert",
                    group: 	"Geoffs Family"},
									 {uid:		"sofia01",
										uname:  "Sofia Herbert",
                    group: 	"Geoffs Family"},
									 {uid:		"edmund01",
										uname: 	"Edmund Herbert",
                    group: 	"Geoffs Family"}
									 ]
                 },
							 { uid:   "roberto01",
                 uname: "Roberto Moguel", 
                 city:  "Univerisity Hills",
								 age:		"40",
                 friends: [
									 {uid:		"geoff01",  
										uname: 	"Geoff Herbert", 
                    group: 	"Robertos Friends"},
									 {uid:		"susana01",
										uname:  "Susana Moguel",
                    group: 	"Robertos Family"},
									 {uid:		"cristina01",
										uname:  "Cristina Herbert",
                    group: 	"Robertos Friends"},
									 {uid:		"pablo01",
										uname:  "Pablo Moguel",
                    group: 	"Robertos Family"},
									 {uid:		"javier01",
										uname: 	"Javier Moguel",
                    group: 	"Robertos Family"}
									 ]
                 },
							 { uid:   "cristina01",
                 uname: "Cristina Herbert", 
                 city:  "Bellevue",
								 age:		"Under 45",
                 friends: [
									 {uid:		"roberto01",  
										uname: 	"Roberto Moguel", 
                    group: 	"Cristinas Friends"},
									 {uid:		"susana01",
										uname: 	"Susana Moguel",
                    group: 	"Cristinas Friends"},
									 {uid:		"sofia01",
										uname:  "Sofia Herbert",
                    group: 	"Cristinas Family"},
									 {uid:		"edmund01",
										uname: 	"Edmund Herbert",
                    group: 	"Cristinas Family"}
									 ]
                 },
							 { uid:   "susana01",
                 uname: "Susana Moguel", 
                 city:  "Bellevue",
								 age:		"39",
                 friends: [
									 {uid:		"roberto01",  
										uname: 	"Roberto Moguel", 
                    group: 	"Susanas Friends"},
									 {uid:		"roberto01",
										uname: 	"Roberto Moguel",
                    group: 	"Susanas Family"},
									 {uid:		"cristina01",
										uname:  "Cristina Herbert",
                    group: 	"Susanas Friends"},
									 {uid:		"pablo01",
										uname:  "Pablo Moguel",
                    group: 	"Susanas Family"},
									 {uid:		"javier01",
										uname: 	"Javier Moguel",
                    group: 	"Susanas Family"}
									 ]
                 }
							 ]
							
             
             
             */