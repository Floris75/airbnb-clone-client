import React from 'react';
import Login from "./login";
import Signup from "./signup";

class Forms extends React.Component {

    render() {
        return (
            <>
                <Login/>
                <Signup/>
            </>
        )
    }
}

export default Forms;