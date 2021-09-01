const router = require("express").Router();

router.use((req, res, next) => {
  console.log("A request is coming into auth.js");
  next();
});

router.get("/testAPI", (req, res) => {
  const msgObj = {
    message: "Test API",
  };
  return res.json(msgObj);
});
module.exports = router;
