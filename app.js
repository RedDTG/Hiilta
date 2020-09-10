let express = require("express");
let path = require("path");
let routes = require("./routes");
let cors = require('cors');
let app = express();
app.use(cors())

app.set("port", process.env.PORT || 3500);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(routes);
app.use(express.static('public'));


app.listen(app.get("port"), function(){
    console.log("Server started on port " + app.get("port"))
});