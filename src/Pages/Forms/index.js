import React from 'react';
import Login from "./login";
import Signup from "./signup";

class Forms extends React.Component {

    render() {
        return (
            <>
                {
                    this.props.location.pathname === "/signin" 
                    ? <div>
                        <h2>Login</h2>
                        <Login {...this.props}/>
                    </div>
                    : this.props.location.pathname === "/signup/host"
                        ? <div>
                            <h2>Inscription hôte</h2>
                            <Signup {...this.props} role={this.props.role} />
                        </div>
                        : this.props.location.pathname === "/signup/guest"
                            ? <div>
                                <h2>Inscription touriste</h2>
                                <Signup {...this.props} role={this.props.role} />
                            </div>
                            : null
                }
            </>
        )
    }
}

export default Forms;