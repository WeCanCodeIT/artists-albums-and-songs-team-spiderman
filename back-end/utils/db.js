const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://admin:passwordpassword@calico-host-khzco.mongodb.net/test?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
    );
    
const db = mongoose.connection;

db.on("error", function(error) {
    console.error("connection error:", error);
  });

db.once("open", function() {
console.log("Connected to the DB!");
});