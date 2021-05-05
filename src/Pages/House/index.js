import React from "react";
import AddingHouse from "./Adding";
import UpdateHouse from "./Update";

class House extends React.Component {

    render() {
        return (
            <>
                <h2>House</h2>
                <AddingHouse/>
                <UpdateHouse/>
            </>
        )
    }
}

export default House;