import React from "react";
import './my_houses.scss';

class MyHouses extends React.Component {
    render () {
        return (
            <div>
                <h2>Mes annonces</h2>
                <a href="/newHouse"><button type="button">Ajouter un logement</button></a> 
            </div>
        )
    }
}

export default MyHouses;