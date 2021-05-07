import React from 'react';
import './Galerie.scss';
import cardImage from '../../Assets/images/Place1.png';
import axios from 'axios';


class Galerie extends React.Component{

    async componentDidMount() {
       
        const response = await axios.get(`http://localhost:8080/api/places`);      
        console.log(response); 
             
    }

    render() {
        return (
            <div className="galerie-container">

                <h2>{this.props.place}Palace 3 étoiles</h2>
                <div className="links-galerie-container">

                    <div className="rate-and-city">
                        <span>5.0 *</span>
                        <a href="#">{this.props.city}Pékin</a>
                    </div>
                

                    <div className="save-and-share">
                        <a href="#">Partager</a>
                        <a href="#">Enregistrer</a>
                    </div>  

                </div>

                <div className = "img-container">
                    <img src={cardImage} alt="place"/>
                    <img src={cardImage} alt="place"/>
                    <img src={cardImage} alt="place"/>
                    <img src={cardImage} alt="place"/>
                </div>
            </div>
            
                

            
        )
    }
}

export default Galerie;