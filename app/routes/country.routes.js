const controller = require("../controllers/country.controller");

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
          "Access-Control-Allow-Headers",
          "x-access-token, Origin, Content-Type, Accept"
        );
        next();
      });
  
    app.post("/api/country/add",     
      controller.CreateCountry
    );
    app.get("/api/country/getall",     
    controller.FindAllCountry
    );
    app.get("/api/country/:id",     
    controller.FindCountryById
    );
    app.delete("/api/country/delete/:id",     
    controller.DeleteCountryById
    );
    app.put("/api/country/update/:id",     
    controller.UpdateCountryById
    );
  };