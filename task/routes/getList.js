const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");

//this is a test done to see if the data is passed through
router.get("/api/coldplay", (req, res) => {
    const term = "coldplay";
    fetch(`https://itunes.apple.com/search?term=${term}`)
    .then(res => res.json())
    .then(items => res.send({ items }))
    .catch(error => {
        console.log(error);
        res.redirect("/error")
    });
});

module.exports = router;