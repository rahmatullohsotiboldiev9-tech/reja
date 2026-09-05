console.log("Web Serverni boshlash");
const express = require("express");
const res = require("express/lib/response");
const app = express();
const fs = require("fs");

let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
  if (err) {
    console.log("ERROR:", err);
  } else {
    user = JSON.parse(data);
  }
});

// MongoDb Call
const db = require("./server").db();

// 1: KIRISH CODE

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2: SESSION CODE

// 3:VIEWS CODE

app.set("'views", "views");
app.set("view engine", "ejs");

// 4: ROUTING CODE

app.post("/create-item", (req, res) => {
  console.log("user entered /create-item");
  db.collection("plans");
  console.log(req.body);
  const new_reja = req.body.reja;
  db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
    console.log("data.ops");
   res.json(data.ops[0]);
    
  });
});

app.get("/", function (req, res) {
  console.log("user entered /");
  db.collection("plans")
    .find()
    .toArray((err, data) => {
      if (err) {
        console.log(err);
        res.end("Something went wrong");
      } else {
        console.log(data);
        res.render("reja", { items: data });
      }
    });
});

app.get("/author", (req, res) => {
  res.render("author", { user: user });
});

module.exports = app;









/*console.log("web serverni boshlash");

const express = require("express");
const app = express();
const http = require("http");
const fs = require("fs");

let user = {};
let authors = [];

// --------------------
// Read user.json
// --------------------
try {
  const userData = fs.readFileSync("database/user.json", "utf8");
  user = JSON.parse(userData);
} catch (err) {
  console.log("ERROR user.json:", err.message);
}

// --------------------
// Read authors.json
// --------------------
try {
  const authorsData = fs.readFileSync("database/authors.json", "utf8");
  authors = JSON.parse(authorsData);
} catch (err) {
  console.log("ERROR authors.json:", err.message);
  authors = [];
}

// --------------------
// Save authors
// --------------------
function saveAuthors(res, successData, status = 200) {
  fs.writeFile(
    "database/authors.json",
    JSON.stringify(authors, null, 2),
    (err) => {
      if (err) {
        console.log("ERROR:", err);
        return res.status(500).json({
          error: "Fayl yozishda xatolik"
        });
      }

      res.status(status).json(successData);
    }
  );
}

// --------------------
// Middleware
// --------------------
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// --------------------
// EJS
// --------------------
app.set("views", "views");
app.set("view engine", "ejs");

// --------------------
// Author API
// --------------------

// Get all authors
app.get("/api/authors", (req, res) => {
  res.json(authors);
});

// Get one author
app.get("/api/authors/:id", (req, res) => {
  const author = authors.find(
    (a) => a.id == req.params.id
  );

  if (!author) {
    return res.status(404).json({
      error: "Author topilmadi"
    });
  }

  res.json(author);
});

// Create author
app.post("/api/authors", (req, res) => {
  const newAuthor = {
    id: Date.now(),
    ...req.body
  };

  authors.push(newAuthor);

  saveAuthors(res, newAuthor, 201);
});

// Update author
app.put("/api/authors/:id", (req, res) => {
  const author = authors.find(
    (a) => a.id == req.params.id
  );

  if (!author) {
    return res.status(404).json({
      error: "Author topilmadi"
    });
  }

  Object.assign(author, req.body);

  saveAuthors(res, author);
});

// Delete author
app.delete("/api/authors/:id", (req, res) => {
  const exists = authors.some(
    (a) => a.id == req.params.id
  );

  if (!exists) {
    return res.status(404).json({
      error: "Author topilmadi"
    });
  }

  authors = authors.filter(
    (a) => a.id != req.params.id
  );

  saveAuthors(res, {
    message: "Author o'chirildi"
  });
});

// --------------------
// Author WEB PAGE
// --------------------

app.get("/author", (req, res) => {
  res.render("author", {
    user: user,
    authors: authors
  });
});

// --------------------
// Home
// --------------------

app.get("/", (req, res) => {
  res.send("LOCALHOST IS WORKING!");
});

// --------------------
// Start server
// --------------------

const server = http.createServer(app);

const PORT = 3000;

server.listen(PORT, () => {
  console.log(
    `The server is running successfully on port: ${PORT}`
  );
});*/
 