const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");

//search for item by movie entity
//use params to get data from client side and pass to server
router.get("/search/:term/:all", async (req, res) => {
  const term = req.params.term;
  const all = req.params.all;
  fetch(`https://itunes.apple.com/search?term=${term}&entity=${all}`)
    .then(res => res.json())
    .then(items => res.send({ items }))
    .catch(error => {
      console.log(error);
      res.redirect("/error");
    });
});

module.exports = router;
