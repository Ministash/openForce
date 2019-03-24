import React from "react";
import API from '../../../utils/API';

class Buttons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: this.props.passedState.displayQuote,
            averageAn: "",
            placedAnswer: 0,
        };
    }

    componentDidMount() {
        this.whatsTheAverage();
    }


    doesItExist = (newAnswer) =>{
        this.setState({placedAnswer: newAnswer});

        API.pushServerInfo(this.state.text, newAnswer)
            .then = () => {
                this.whatsTheAverage();
            }
    }

    whatsTheAverage = () =>{
        API.getTheAverage(this.state.text, this.state.placedAnswer)
        .then(res => {
            console.log(res);
            // if(res.data.obj.itIsFalse === false){
            //     this.setState({averageAn: "Not Yet Rated"});
            // }else{

            // }
        }).catch(err => console.log(err));
    }



    // storeInDataBase = () =>{
    //     API.pushServerRating()
    //     .then(res => {
    //         //do something
    //     }).catch(err => console.log(err));
    // }



    render() {


        return (
            <div>
                <div>
                    {this.state.text}

                    <div>
                        <button className="1" onClick={() => { this.doesItExist(1) }}>Rare</button>
                        <button className="2" onClick={() => { this.doesItExist(2) }}>Medium Rare</button>
                        <button className="3" onClick={() => { this.doesItExist(3) }}>Medium</button>
                        <button className="4" onClick={() => { this.doesItExist(4) }}>Medium Well</button>
                        <button className="5" onClick={() => { this.doesItExist(5) }}>Well Done</button>
                    </div>

                    <div>
                        Average Answer: {this.state.averageAn}
                    </div>
                </div>
            </div>
        )
    }
};

export default Buttons;