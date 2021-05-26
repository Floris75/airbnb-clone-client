import React from "react";
import AddingHouse from "./Adding";
import UpdateHouse from "./Update";
import appContext from '../../store';

class House extends React.Component {

    static contextType = appContext;

    render() {
        return (
        <appContext.Consumer>
        {(store) => (
            <>
                <h2>House</h2>
                <AddingHouse/>
                <UpdateHouse/>
            </>
        )}
        </appContext.Consumer>
        )
    }
}

export default House;