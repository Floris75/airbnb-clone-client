import './Assets/App.css';
import Header from "./Pages/Partials/Header";
import Footer from "./Pages/Partials/Footer";
import Home from "./Pages/Home";
import HouseDetails from "./Pages/HouseDetails";
import Search from './Pages/Search';
import Forms from './Pages/Forms';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/housedetails/:id' render={(props)=> <HouseDetails {...props} />} />
        <Route path='/signin' component={Forms}/>
        <Route path='/signup/host' component={Forms}/>
        <Route path='/signup/guest' component={Forms}/>
        <Route path='/search/:city' render={(props)=> <Search {...props} />}/>
        <Route path='/search/:checkin/:checkout' render={(props)=> <Search {...props} />}/>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
