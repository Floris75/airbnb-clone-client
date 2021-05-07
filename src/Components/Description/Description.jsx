import React from 'react';
import './Descriptions.scss';
import portrait from '../../Assets/images/portrait.jpg';
import Button from '../Buttons/button';

class Description extends React.Component{

    render() {
        return (

            // DESCRIPTION DU BIEN
            <div className="description-container">
                <div className="infos-container">
                    <div className="title-container">
                        <div className="title">
                            <h2>Maison Louée par <span>{this.props.user}Marie</span></h2>
                            <p>{this.props.number} 4 voyageurs · {this.props.rooms} 1 chambre · {this.props.bathrooms}· 1 salle de bain</p>
                        </div>
                        <img src={portrait} alt="portrait" id="portrait"/>
                        
                    </div>
                    <hr/>
                    <p>{this.props.description}Jolie pte maison 50 m2.TB située: permet de tout faire à pieds.
                    </p>
                   

                </div>
                {/* RESERVATION  */}
                <div className="date-container">

                    <h2>Prix {this.props.price}</h2>
                    <a href="#">2 commentaires</a>
                    
                    <form>
                        <div class="grid-container">
                            <div className="input1">
                                <label>Arrivée</label>
                                <input type="date" name="" id="date" />
                            </div>

                            <div class="input2"> 
                                <label>Départs</label>
                                <input type="date" name="" id="date" />
                            </div>

                            <div class="input3"> 
                                <label>Nombre de voyageurs</label>
                                <input type="number" name="" id="numberVoyagers"/>
                            </div>

                        </div> 
                        <Button/>
                    </form>
                       
                </div>

                   

           

            </div>
            
            
        )
    }

}

export default Description;