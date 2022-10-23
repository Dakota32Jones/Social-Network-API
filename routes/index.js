const router = require("express").Router();

// import all the api routes from index

const apiRoutes = require("./api");

// make sure to add the prefix of /api to all the routes
router.use("/api", apiRoutes);

router.use((req, res) => {
  res.status(404).send("<h1> 404 error. <h1>");
});

module.exports = router;
