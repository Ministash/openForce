const router = require("express").Router();
const db = require("../../models");

router.route("/exists")
    .get(function (req, res) {

    })
    .post(function (req, res) {
        let newTextInfo = req.body.text

        db.Quotes.findOne({
            where: {
                text: req.body.text
            }
        })
            .then(function (data) {
                if (data === null) {
                    console.log("theres nothing there, push server info route");
                    createNewQuote();
                } else {
                    console.log("Somethign in there, push server info route");
                    // console.log(data);
                    res.send({ thisNeedsToChange: "Hello"});
                }

                // res.send({ quoteInfo: data });
            })

        function createNewQuote() {
            db.Quotes.create({
                text: newTextInfo[0],
                average: 0,
            });
            res.send({ thisNeedsToChange: "Hello"});
        }
    });


router.route("/average")
    .post(function (req, res) {
        let newAverage = req.body.newAverage;
        // checking if the item exists or not
        db.Answers.findOne({
            where: { belongText: req.body.text }
        }).then(function (data) {

            if (data === null) {
                console.log("theres nothing there");
                setANewAverage();
                //creating the new average item in our database
            } else {
                findTheAverage();
            }
        })


        function setANewAverage() {
            // console.log(req.body.text[0]);

            if(newAverage === 0){
                console.log("Waiting for user to tell us");
                res.send({itIsFalse: true});
            }else{
                db.Answers.create({
                    answers: newAverage,
                    belongText: req.body.text[0],
                });
                
                res.send({itIsFalse: true});
            }
        }



         //The important stuff. Adding a new average if it needs one, then telling the user the average
        function findTheAverage(){
            let newAverageNum = parsInt(newAverage);
            let currentQuote = req.body.text;

            // db.Answers.update({
            //     where: {answers: currentQuote}
            // })

            db.Answers.findOne({
                where: {belongText: currentQuote}
            }).then(function (data){
                // console.log(data);
            });

            res.send({ thisNeedsToChange: "Hello"});


        }
    });

module.exports = router;