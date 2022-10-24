const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// database
const db = require("./app/models");
const TypeUser = db.typeUser;
console.log("I was here");
// db.sequelize.sync();
// force: true will drop the table if it already exists
db.sequelize.sync({alert:true}).then(() => {
  console.log('Sync Database');
})
.catch((err) => {
  console.log("Failed to sync db: " + err.message);
});

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to ibus application." });
});

// routes
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);
require('./app/routes/country.routes')(app);
require('./app/routes/typeUser.routes')(app);
require('./app/routes/address.routes')(app);

// set port, listen for requests
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

 
