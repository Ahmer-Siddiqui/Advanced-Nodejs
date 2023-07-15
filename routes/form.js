const express = require("express");
const router = express.Router();
const path = require('path');


router.get("/", (req, res) => {
  res.sendFile(path.join(process.cwd(), "views", "form.html"))
});


router.post("/submit", (req, res)=>{
    res.send(req.body)
})

module.exports = router;
