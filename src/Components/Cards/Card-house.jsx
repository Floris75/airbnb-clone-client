import React from 'react';
import './Card-house.scss';

// import cardImage from '../../Assets/images/Place1.png';

class CardHouse extends React.Component{

    render() {
        return (

            <div className = "cardHouse">
                <img className ="cardImage"src={this.props.src} alt="place  "/>
                <a href={`/housedetails/${this.props.id}`}><h3>Escapades en pleine nature </h3></a>
                
                <p>Des expériences qui vous plongent en pleine nature</p>
               
            </div>
                

            
        )
    }

}

export default CardHouse;

