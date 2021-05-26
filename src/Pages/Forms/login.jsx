import React from 'react';
import userService from '../../Services/user';
import appContext from '../../store';
import './forms.scss';

class Login extends React.Component {

    static contextType = appContext;

    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            error: null
        }
    }

    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({[name]: value});
    }

    handleClick = async (e) => {
        const {email, password} = this.state;

        try {
            const response = await userService.login(email, password);
            localStorage.setItem('token', response.data.token);
            this.context.setAuth(true);
            this.context.setUser(response.data.user);
            this.props.history.push('/');
        } catch(e) {
            console.log(e.response)
            this.setState({error: e.response});
        }
    }

    render() {
        return (
            <appContext.Consumer>
            {(store) => (
                    <div className="login">
                        <h2>Se connecter</h2>
                        {this.state.error && <h6>{this.state.error}</h6>}
                        <input type="text" name="email" placeholder="email" value={this.state.email} onChange={this.handleChange} />
                        <input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.handleChange} />
                        <button type="button" onClick={this.handleClick}>Log in</button>
                    </div>
                    )}
            </appContext.Consumer>
        )
    }
}

export default Login;
