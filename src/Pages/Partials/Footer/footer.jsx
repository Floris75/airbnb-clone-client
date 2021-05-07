import React from "react";
import appContext from '../../../store';

class Footer extends React.Component {
    static contextType = appContext;
    render () {
        return (
            <div>
                <h2>Footer</h2>
                <nav>
                    <ul>
                        <a href="/" ><li>Home</li></a>
                        {   this.context.user === null
                                ?null
                                : !this.context.user.role
                                    ? null
                                    : this.context.user.role === "Host"
                                        ? <a href="/myHouses" ><li>My Houses</li></a>
                                        : this.context.user.role === "Guest"
                                            ? <a href="/myBooking" ><li>My Bookings</li></a>
                                            : null
                        }
                       
                    </ul>
                </nav>
                <div className="SocialNetwork">
                    <ul>
                        Social Network :
                        <a href="https://www.facebook.com/AirbnbFrance" target="_blank" rel="noreferrer"><li>Facebook</li></a>
                        <a href="https://twitter.com/airbnb_fr" target="_blank" rel="noreferrer"><li>Instagram</li></a>
                        <a href="https://instagram.com/airbnb" target="_blank" rel="noreferrer"><li>Twitter</li></a>
                    </ul>
                </div>
                <hr></hr>
                <p> clone airbnb 2021 © - by Laura, Esther, Matildad and Floris</p>
            </div>
        )
    }

}

export default Footer;