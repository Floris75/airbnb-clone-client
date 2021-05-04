import React from "react";
import userService from '../../Services/user';

class Signup extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            firstname: null,
            lastname: null,
            email: null,
            password: null,
            role: this.props.role
        }
    }

   handleChange = (e) => {
       if (this.state.firstname !== null)
       this.setState({
         firstname: e.target.value     
       })
       if (this.state.lastname !== null)
       this.setState({
         lastname: e.target.value     
       })
       if (this.state.email !== null)
       this.setState({
         email: e.target.value     
       })
       if (this.state.password !== null)
       this.setState({
         password: e.target.value     
       })
   }

    sendSignup = async () => {
        const user = {firstname: this.state.firstname, lastname: this.state.lastname, email: this.state.email, password: this.state.password, role: this.state.role};

        try {
            const response = await userService.signup(user);
            if (response) {
                this.props.history.push('/signin');
            }
        } catch(e) {
            this.setState({error: e.response.data.error});
        }

    }

    render() {
        return (
            <form>
                <h2>Sign up !</h2>
                <div className="form-group">
                    <label>First name</label>
                    <input  value={this.state.firstname} onChange={this.handleChange} type="text" className="form-control" placeholder="First name"/>
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input value={this.state.lastname} onChange={this.handleChange} type="text" className="form-control" placeholder="Last name" />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input value={this.state.email} onChange={this.handleChange} type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input value={this.state.password} onChange={this.handleChange} type="password" className="form-control" placeholder="Enter password"/>
                </div>

                <button onClick={this.sendSignup} type="submit" className="signup-btn">Sign Up</button>

            </form>
        )
    }
}

export default Signup;