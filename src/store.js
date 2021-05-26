import React from 'react';
import JWT from 'jsonwebtoken';

const appContext = React.createContext();

class AppProvider extends React.Component {
    constructor(props) {
        super(props)

        const token = localStorage.getItem('token');        

        this.state={
            user: null,
            isAuth: token ? true : false,
            setUser: this.setUser,
            setAuth: this.setAuth        
        }
    }

    componentDidMount () {
        const token = localStorage.getItem('token');    
        const secret = process.env.REACT_APP_SECRET;
        JWT.verify(token, secret, (error, user) => {
            if (error) {
                console.log("error :", error.message)
                this.setUser(null);
            }
            else {     
                console.log('trop cool')
                console.log(user);
                this.setUser(user);
            }
        })
    }

    setUser = (user) => {
        console.log({user});
        this.setState({user});
    }

    setAuth = (boolean) => {
        this.setState({isAuth: boolean});
    } 
    
    render () {
        return (
            <appContext.Provider value={this.state}>
                {console.log("pouet:", this.state)}
                {this.props.children}
            </appContext.Provider>
        )
    }
}


export {AppProvider};
export default appContext;

