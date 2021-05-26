import React from "react";
import appContext from '../../store';

class HouseDetails extends React.Component {
    static contextType = appContext;
    
    render () {
        return (
            <appContext.Consumer>
            {(store) => (
                <div>
                    <h2>HouseDetails</h2>
                </div>
            )}
            </appContext.Consumer>
        )
    }

}

export default HouseDetails;
