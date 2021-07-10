const express = require("express");
const router = express.Router();

const favorites = [];

//set favourites
router.get("/api/favorites", function(req, res){
    res.json(favorites);
});

router.post("/api/favorites", (req, res) => {
 //create new object instance for post request
    const newArray = {
    //set newArray id to be equal to the length of the new favorites array plus 1
        id: favorites.length +1,
    //the title, description and url of the new newArray is entered into the body
        title: req.body.title,
        description: req.body.description
    };
  //the new newArray is pushed into the favorites array using the push function
    favorites.push(favorite);

    res.json(`newArray ${favorite.id} was is successfully created.`);

});

module.exports = router;