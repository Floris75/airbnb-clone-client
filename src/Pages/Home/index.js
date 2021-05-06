import React from "react";
import CardHouse from "../../Components/Cards/Card-house";
import './Home.scss';

class Home extends React.Component {
    render () {
        return (
            <div className ="cards-container">
                <CardHouse/>
                <CardHouse/>
                <CardHouse/>
                <CardHouse/>
            </div>
        )
    }
}

export default Home;