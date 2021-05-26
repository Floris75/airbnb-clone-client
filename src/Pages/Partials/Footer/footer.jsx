import React from "react";
import appContext from '../../../store';
import './footer.scss';

class Footer extends React.Component {
    static contextType = appContext;

    render () {
        console.log("context : ", this.context)
        return (
            <appContext.Consumer>
            {(store) => (
            <footer>
                <div className="links">
                    <nav>
                        <ul>
                            <a href="/housedetails/1" ><li>HOME</li></a>
                            {   
                                this.context.user === null
                                    ? null
                                    : !this.context.user.role
                                        ? null
                                        : this.context.user.role === "host"
                                            ? <a href="/myHouses" ><li>My Houses</li></a>
                                            : this.context.user.role === "guest"
                                                ? <a href="/myBooking" ><li>My Bookings</li></a>
                                                : null
                            }
                        </ul>
                    </nav>
                    <div className="SocialNetwork">
                        <ul>
                            <a href="https://www.facebook.com/AirbnbFrance" target="_blank" rel="noreferrer"><li>Facebook</li></a>
                            <a href="https://twitter.com/airbnb_fr" target="_blank" rel="noreferrer"><li>Instagram</li></a>
                            <a href="https://instagram.com/airbnb" target="_blank" rel="noreferrer"><li>Twitter</li></a>
                        </ul>
                    </div>
                </div>
                <hr></hr>
                <p> clone airbnb 2021 © - by Laura, Esther, Matildad and Floris</p>
                
            </footer>
            )}
            </appContext.Consumer>
        )
    }

}

export default Footer;