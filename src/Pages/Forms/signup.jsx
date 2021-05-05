import React from "react";
import userService from '../../Services/user';

class Signup extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            role: this.props.role,
            error: ""
        }
    }

   handleChangeFirstname = (e) => {
    const firstname = e.target.value
    this.setState({firstname})
    }

    handleChangeLastname = (e) => {
        const lastname = e.target.value
        this.setState({lastname})
    }

    handleChangeEmail = (e) => {
        const email = e.target.value
        this.setState({email})
        }
        
    handleChangePassword = (e) => {
        const password = e.target.value
        this.setState({password})
    }

    sendSignup = async () => {
        const user = {first_name: this.state.firstname, last_name: this.state.lastname, email: this.state.email, password: this.state.password, role: this.state.role};
        try {
            const response = await userService.signup(user);
            if(response) {
                this.props.history.push('/signin');
            }
        } catch(e) {
            this.setState({error: e.response});
        }
    }

    render() {
        return (
            <form>
                <div className="form-group">
                    <label>First name</label>
                    <input  value={this.state.firstname} onChange={this.handleChangeFirstname} type="text" className="form-control" placeholder="First name"/>
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input value={this.state.lastname} onChange={this.handleChangeLastname} type="text" className="form-control" placeholder="Last name" />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input value={this.state.email} onChange={this.handleChangeEmail} type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input value={this.state.password} onChange={this.handleChangePassword} type="password" className="form-control" placeholder="Enter password"/>
                </div>

                <button onClick={this.sendSignup} type="button" className="signup-btn">Sign Up</button>

            </form>
        )
    }
}

export default Signup;