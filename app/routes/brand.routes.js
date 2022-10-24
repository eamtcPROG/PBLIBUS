const controller = require("../controllers/brand.controller");

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
          "Access-Control-Allow-Headers",
          "x-access-token, Origin, Content-Type, Accept"
        );
        next();
      });
  
    app.post("/api/brand/add",     
      controller.CreateBrand
    );
    app.get("/api/brand/getall",     
    controller.FindAllBrands
    );
    app.get("/api/brand/:id",     
    controller.FindBrandById
    );
    app.delete("/api/brand/delete/:id",     
    controller.DeleteBrandById
    );
    app.put("/api/brand/update/:id",     
    controller.UpdateBrandById
    );
  };