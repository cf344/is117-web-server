
const express = require("express");

const app = express();
const PORT = 3000;

// Home page
app.get("/", (req, res) => {
  res.send("Hello, IS117! Your web server is working.");
});

// About page
app.get("/about", (req, res) => {
  res.send("This is my IS117 web server project.");
});

// 404 page
app.use((req, res) => {
  res.status(404).send("404 - Page Not Found");
});

// Start the server

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}

module.exports = app;
