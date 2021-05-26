import React from "react";
import house from '../../Services/places';
import appContext from '../../store';
import './house.scss';
import photo from "../../Assets/images/addinghouse.png";



class AddingHouse extends React.Component {

    static contextType = appContext;
    
    constructor(props){
        super(props)
        this.state = {
            city_name:"",
            name_place:"",
            description:"",
            rooms:"",
            bathrooms:"",
            max_guests:"",
            price_by_night:"",
            user_id: "" 
        }
    }

    handleChangeCity = (e) => {
        const city_name = e.target.value
        this.setState({city_name})
    }

    handleChangeName = (e) => {
        const name_place = e.target.value
        this.setState({name_place})
    }

    handleChangeDescription = (e) => {
        const description = e.target.value
        this.setState({description})
    }

    handleChangeRooms = (e) => {
        const rooms = e.target.value 
        this.setState({rooms})
    }

    handleChangeBathrooms = (e) => {
        const bathrooms = e.target.value 
        this.setState({bathrooms})
    }

    handleChangeGuests = (e) => {
        const max_guests = e.target.value 
        this.setState({max_guests})
    }

    handleChangePrice = (e) => {
        const price_by_night = e.target.value 
        this.setState({price_by_night})
    }

    sendAddingHouse = async () => {
        
        const house_infos = {
            city_name: this.state.city_name, 
            name_place: this.state.name_place, 
            description: this.state.description, 
            rooms: this.state.rooms, 
            bathrooms: this.state.bathrooms, 
            max_guests: this.state.max_guests, 
            price_by_night: this.state.price_by_night,
            user_id: this.state.user.userId};
            
        
        try {
            const response = await house.newHouse(house_infos);
            if(response) {
                this.props.history.push('/myHouses');
            }
        } catch(e) {
            this.setState({error: e.response});
        }
    }

    render () {
        
        return (
        <appContext.Consumer>
        {(store) => (
            
          <div className="container-addhouse">
            <form>

                <div className="form-group">
                    <label>Dans quelle ville se trouve votre logement</label>
                    <input  value={this.state.city_name} onChange={this.handleChangeCity} type="text" className="form-control" placeholder="ville"/>
                </div>
                
                <div className="form-group">
                    <label>Choisissez un nom pour votre logement</label>
                    <input  value={this.state.name_place} onChange={this.handleChangeName} type="text" className="form-control" placeholder="nom logement"/>
                </div>

                <div className="form-group">
                    <label>Ajoutez une description de votre logement</label>
                    <input value={this.state.description} onChange={this.handleChangeDescription} type="text" className="form-control" placeholder="description" />
                </div>

                <div className="form-group">
                    <label>Nombre de chambres</label>
                    <input value={this.state.rooms} onChange={this.handleChangeRooms} type="text" className="form-control" placeholder="chambres" />
                </div>

                <div className="form-group">
                    <label>Nombre de salles de bains</label>
                    <input value={this.state.bathrooms} onChange={this.handleChangeBathrooms} type="text" className="form-control" placeholder="salles de bains"/>
                </div>

                <div className="form-group">
                    <label>Nombre maximum d'invités</label>
                    <input value={this.state.max_guests} onChange={this.handleChangeGuests} type="text" className="form-control" placeholder="nombre d'invités"/>
                </div>

                <div className="form-group">
                    <label>Prix par nuit</label>
                    <input value={this.state.price_by_night} onChange={this.handleChangePrice} type="text" className="form-control" placeholder="prix par nuit"/>
                </div>

                <button onClick={this.sendAddingHouse} type="button" className="signup-btn">Mettre en location</button>

            </form>

            <div className="container-image">
                <img src={photo} alt=""/>
            </div>
          </div>
        )}
        </appContext.Consumer>
          
        )
    }
}

export default AddingHouse;