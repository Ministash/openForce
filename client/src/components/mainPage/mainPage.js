import React from "react";
import "./mainPage.css";
import API from "../../../src/utils/API";
import Buttons from '../../components/mainPage/avAnswerButton/index';

class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lookingSize: "",
            randomQuote: "",
            displayQuote: [],
            quotes: [],
            currentArrLength: 0,
            haveParamsBeenMet: false,
            rating: 0,
            averageAn: '',
        };
    }

    

    componentDidMount() {
        this.setSize("small");
    }

    callQuoteFunctions = () => {
        this.setState({ haveParamsBeenMet: false });
        this.gettingQuotes();
    }


    setSize = (passedSize) => {
        this.setState({ lookingSize: passedSize }, () => {
            console.log(this.state.lookingSize);
        });
    }

    gettingQuotes = () => {
        API.getApiQuotes()
            .then(res => {
                this.setState({ randomQuote: res.data[0] }, () => {
                    this.splitQuote();
                });
            }).catch(err => console.log(err));
    }

    splitQuote = () => {
        this.setState({ currentArrLength: this.state.randomQuote.split(" ").length }, () => {
            this.checkQuoteLength();
        });
    }




    checkQuoteLength = () => {

        if (this.state.lookingSize === "small" && this.state.haveParamsBeenMet === false) {
            if (this.state.currentArrLength < 4) {
                this.setState({ haveParamsBeenMet: true }, () => {
                    this.setState({ displayQuote: [this.state.randomQuote] });
                });
            } else {
                this.gettingQuotes();
                this.setSize("small");
            }
        } else if (this.state.lookingSize === "medium" && this.state.haveParamsBeenMet === false) {
            if (this.state.currentArrLength < 13 && this.state.currentArrLength > 4) {
                this.setState({ haveParamsBeenMet: true }, () => {
                    this.setState({ displayQuote: [this.state.randomQuote] });
                });

            } else {
                this.gettingQuotes();
                this.setSize("medium");
            }
        } else if (this.state.lookingSize === "large" && this.state.haveParamsBeenMet === false) {
            if (13 <= this.state.currentArrLength) {
                this.setState({ haveParamsBeenMet: true }, () => {
                    this.setState({ displayQuote: [this.state.randomQuote] });

                });

            } else {
                this.gettingQuotes();
                this.setSize("large");
            }
        }
    }

    render() {

        return (
            <div>
                <button className="small button" onClick={() => { this.setSize('small') }}>small</button>
                <button className="medium button" onClick={() => { this.setSize('medium') }}>medium</button>
                <button className="large button" onClick={() => { this.setSize('large') }}>large</button>


                <button className="send-it button" onClick={() => { this.callQuoteFunctions() }}>send it</button>


                <div className="quote-wrapper">
                    {this.state.haveParamsBeenMet === true ?
                        this.state.displayQuote.map((item, i) => {
                            return < Buttons key={i} passedState={this.state}/>
                        })
                        :
                        <div>Pick A New Quote!</div>
                    }


                </div>
            </div>
        )
    }
};

export default MainPage;