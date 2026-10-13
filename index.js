
const express = require("express");

const app = express();
const PORT = 3000;

// Home page

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});


// About page

app.get("/about", (req, res) => {
    res.sendFile(__dirname + "/public/about.html");
});


// 404 page
app.use((req, res) => {
  res.status(404).send("404 - Page Not Found");
});

// Start the server

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`IS117 server running at http://localhost:${PORT}`);
  });
}

module.exports = app;
