import React from "react";
import CardHouse from "../../Components/Cards/Card-house";
import './Home.scss';
import appContext from '../../store';

class Home extends React.Component {
    static contextType = appContext;
    
    render () {
        return (
            <appContext.Consumer>
            {(store) => (
                <div className ="cards-container">
                    <CardHouse/>
                    <CardHouse/>
                    <CardHouse/>
                    <CardHouse/>
                </div>
            )}
            </appContext.Consumer>
        )
    }
}

export default Home;