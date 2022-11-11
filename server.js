const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:3000"
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
const typeTransport = db.typeTrasport;
typeTransport.sync({ force: true }).then(() => {
  typeTransport.create({ Name: "Sedan" });
  typeTransport.create({ Name: "Bus" });
  typeTransport.create({ Name: "Minibus" });
  typeTransport.create({ Name: "Van" });

  console.log('Sync typeTransport');
})
  .catch((err) => {
    console.log("Failed to sync typeTransport: " + err.message);
    
  });

const country = db.country;
country.sync({ force: true }).then(() => {
  country.create({ Name: "Moldova" });
  country.create({ Name: "Romania" });
  country.create({ Name: "Polonia" });
  country.create({ Name: "Italia" });

  console.log('Sync country');
})
  .catch((err) => {
    console.log("Failed to sync country: " + err.message);
    
  });
 

const typeUser = db.typeUser;
typeUser.sync({ force: true }).then(() => {
  typeUser.create({ Name: "Customer" });
  typeUser.create({ Name: "Transporter" });

  console.log('Sync user');
})
  .catch((err) => {
    console.log("Failed to sync user: " + err.message);
    
  });


const brand = db.brand;
brand.sync({ force: true }).then(() => {
  brand.create({ Name: "Mercedes" });
  brand.create({ Name: "VolksWagen" });
  brand.create({ Name: "Ford" });
  brand.create({ Name: "Iveco" });
  brand.create({ Name: "Hyundai" });
  brand.create({ Name: "Renault" });
  brand.create({ Name: "Neoplan" });
  brand.create({ Name: "Man" });
  brand.create({ Name: "Scania" });
  
  
    console.log('Sync country');
  })
    .catch((err) => {
      console.log("Failed to sync country: " + err.message);
      
    });

const model = db.model;
model.sync().then(() => {
    model.create({Name: "Tourismo", BrandId: 1 });
    model.create({ Name: "Vito", BrandId: 1 });
    model.create({ Name: "Multivan", BrandId: 2 });
      
      
      console.log('Sync country');
    })
      .catch((err) => {
        console.log("Failed to sync country: " + err.message);
          
      });
      db.sequelize.sync({alter:true}).then(() => {
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
require('./app/routes/order.routes')(app);
require('./app/routes/customer.routes')(app);
require('./app/routes/brand.routes')(app);
require('./app/routes/offer.routes')(app);
require('./app/routes/transporter.routes')(app);
require('./app/routes/transport.routes')(app);
require('./app/routes/model.routes')(app);
require('./app/routes/typeTrasport.routes')(app);
// set port, listen for requests
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

 
