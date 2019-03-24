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
                    console.log(data);
                }

                // res.send({ quoteInfo: data });
            })

        function createNewQuote() {
            db.Quotes.create({
                text: newTextInfo[0],
                average: 0,
            })
        }
    });


router.route("/average/:id")
    .get(function (req, res) {

        db.Answers.findOne({
            where: { belongText: req.body.text }
        }).then(function (data) {

            if (data === null) {
                console.log("theres nothing there");
                setANewAverage();
            } else {
                res.send({ currentAverage: data });
            }
        })

        function setANewAverage() {
            console.log("FUCK ME SIDE WAYS");
            // db.Answers.create({
            //     answers: req.body.newAverage,
            //     belongText: req.body.text
            // });

            // res.send("hello");
        }
    });

module.exports = router;