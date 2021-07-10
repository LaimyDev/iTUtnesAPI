const express = require("express");
const app = express();
const path = require("path");


var cors = require("cors");
app.use(cors());



app.use(express.static(path.join(__dirname, 'client/build')));


const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());


const helmet = require("helmet");
app.use(helmet());

const searchMedia = require("./routes/searchMedia.js");
const searchAll = require("./routes/searchAll.js");
const favorite = require("./routes/favorite.js");
const getList = require("./routes/getList.js");

const fetch = require("node-fetch");

app.get("/search/:term/:media", searchMedia);
app.get("/search/:term", searchAll);
app.get("/api/coldplay", getList);
app.get("/api/favorites", favorite);




if(process.env.NODE_ENV === "production"){
  app.use(express.static(__dirname+"/client/build"));

app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'))
});
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {

    console.log(`server is up on port ${PORT}`);
});

module.exports = app;