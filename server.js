console.log("web serverni boshlash");

const express = require("express");
const app = express();
const http = require("http");

// 1: Kirish code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));


// 2: session code
// 3: views code
app.set("views", "views");
app.set("view engine", "ejs");


// 4: Routing code
app.get("/Hello", function(req, res) {
    res.end(`<h1 style ="background: lightblue">Hello world by Bekzod Ali<h1>`);
});

app.get("/gift", function(req, res) {
    res.end(`<h1 style ="background: lightblue">Sovg'alar bo'limiga hush kelibsiz!<h1>`);
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function(){
console.log(`The server is running succesfully on port: ${PORT}`);
});