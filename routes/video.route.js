const express = require("express");
const router = express.Router();

router.get("/generateToken", (req, res) => {
    res.send("ok")
});

module.exports = router;
