const { Router } = require("express");

const router = Router();

router.get('/saludo', (req, res) => {
  res.send("hola");
});

module.exports = router;