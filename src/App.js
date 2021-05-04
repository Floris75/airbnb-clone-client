import './Assets/App.css';
import Header from "./Pages/Partials/Header";
import Footer from "./Pages/Partials/Footer";
import Home from "./Pages/Home";
import HouseDetails from "./Pages/HouseDetails";
import Search from './Pages/Search';
import Forms from './Pages/Forms';
import House from './Pages/House';
import appContext from './store';
import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

const PrivateRoute = ({component: Component, ...rest}) => {
  const store = React.useContext(appContext);
  return (
    <Route {...rest} render={(props) => (
      store.isAuth
      ? <Component {...props} />
      : <Redirect to='/' />
    )} />
  );
}

function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/housedetails/:id' render={(props)=> <HouseDetails {...props} />} />
        <Route path='/signin' component={Forms}/>
        <Route path='/signup/host' render={(props) => {<Forms {...props} role="host"/>}}/>
        <Route path='/signup/guest' render={(props) => {<Forms {...props} role="guest"/>}}/>
        <PrivateRoute path='/myHouses' component={Search}/> {/* ETQ hôte, je veux consulter tous mes apparts dispos à la loc */}
        <PrivateRoute path='/myHouses/booking' component={Search}/>  {/* ETQ hôte, je veux consulter toutes les resa de mes apparts */}
        <PrivateRoute path='/myBooking' component={Search}/> {/* ETQ touriste, je veux afficher toutes mes résas*/}
        <PrivateRoute path='/newHouse' component={House}/> {/* ETQ hôte, je veux ajouter une maison en location ou modifier un appartement en location */}
        <Route path='/search/:city' render={(props)=> <Search {...props} />}/>
        <Route path='/search/:checkin/:checkout' render={(props)=> <Search {...props} />}/>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
