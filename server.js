'use strict';

// Dependencies
const express = require('express');

// Setup Express Server
const app = express();
const PORT = process.env.PORT || 8080;

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
