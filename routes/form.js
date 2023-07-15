const express = require("express");
const router = express.Router();
const path = require('path');

//note: we put views directery in main app.js so not put complete path
// now our path is views file
router.get("/", (req, res) => {
  res.render("form", {user: req.query.name || "Siddiqui"})
});


router.post("/submit", (req, res)=>{
    res.send(req.body)
})

module.exports = router;
