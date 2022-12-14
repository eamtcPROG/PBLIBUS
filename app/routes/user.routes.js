const { authJwt } = require("../middleware");
const controller = require("../controllers/user.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/test/all", controller.allAccess);

  app.get(
    "/api/test/mod",
    [authJwt.verifyToken, authJwt.isCustomer],
    controller.customerBoard
  );

  app.get(
    "/api/test/admin",
    [authJwt.verifyToken, authJwt.isTrasporter],
    controller.trasporterBoard
  );
  app.get(
    "/api/test/admin",
    [authJwt.verifyToken],
    controller.trasporterBoard
  );
};
