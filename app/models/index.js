const config = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    operatorsAliases: false,

    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../models/user.model.js")(sequelize, Sequelize);
db.typeUser = require("../models/typeUser.model.js")(sequelize, Sequelize);
db.country = require("../models/country.model.js")(sequelize, Sequelize);
db.brand = require("../models/brand.model.js")(sequelize, Sequelize);
db.model = require("../models/model.model.js")(sequelize, Sequelize);
db.typeTrasport = require("../models/typeTrasport.model.js")(sequelize, Sequelize);
db.transport = require("../models/transport.model.js")(sequelize, Sequelize);
db.address = require("../models/address.model.js")(sequelize, Sequelize);
db.order = require("../models/order.model.js")(sequelize, Sequelize);
db.customer = require("../models/customer.model.js")(sequelize, Sequelize);
db.transporter = require("../models/transporter.model.js")(sequelize, Sequelize);
db.offer = require("../models/offer.model.js")(sequelize, Sequelize);


db.typeUser.hasMany(db.user, { foreignKey: 'TypeUserId' });
db.brand.hasMany(db.model, { foreignKey: 'BrandId' });
db.model.hasMany(db.transport, { foreignKey: 'ModelId' });
db.typeTrasport.hasMany(db.transport, { foreignKey: 'TypeTransportId' });
db.transport.hasMany(db.transporter, { foreignKey: 'TransportId' });
db.user.hasMany(db.transporter, { foreignKey: 'UserId' });
db.country.hasMany(db.address, { foreignKey: 'CountryId' });
db.address.hasMany(db.order, { foreignKey: 'StartPointAddressId' });
db.address.hasMany(db.order, { foreignKey: 'EndPointAddressId' });
db.address.hasMany(db.order, { foreignKey: 'EndPointAddressId' });
db.order.hasMany(db.customer, { foreignKey: 'OrderId' });
db.user.hasMany(db.customer, { foreignKey: 'UserId' });
db.order.hasMany(db.offer, { foreignKey: 'OrderId' });
db.transporter.hasMany(db.offer, { foreignKey: 'TrasporterId' });

module.exports = db;