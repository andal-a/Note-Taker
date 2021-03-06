// Require Dependencies
const express = require("express");
const path = require("path");

// Create and Initialize express app
// Establish port
const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "./public")));

//Require routes file
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// Setup listener
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});