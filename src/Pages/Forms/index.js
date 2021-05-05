import React from 'react';
import Login from "./login";
import Signup from "./signup";

class Forms extends React.Component {

    render() {
        return (
            <>
                <h2>Login / Signup</h2>
                <Login/>
                <Signup/>
            </>
        )
    }
}

export default Forms;