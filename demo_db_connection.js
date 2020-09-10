var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "hiilta",
    password: "workshop2021"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Result: " + result);
    });
});

