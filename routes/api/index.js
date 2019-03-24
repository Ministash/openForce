const router = require("express").Router();
const quotes = require("./quotes");

//The first part of this function is specifying the what the api route will use to load the variable.
//So "/quotes" is loading drinks the variable. If you change the first part ("/quotes") you need to 
//change the other places that the route is being used.
router.use("/quotes", quotes);
console.log("for some reason you can still see this");


module.exports = router;
