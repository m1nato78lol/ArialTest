import React, { Component } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";

export default class GetCard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            card_firstname: '',
            card_lastname: '',
            card_email: '',
            card_gender: '',
            card_image: ''
        }
    }


    componentDidMount() {
        axios.get('http://localhost:4000/cards/'+this.props.match.params.id)
            .then(response => {
               this.setState({
                 
                    card_firstname: response.data.card_firstname,
                    card_lastname: response.data.card_lastname,
                    card_email: response.data.card_email,
                    card_gender: response.data.card_gender,
                    card_image: response.data.card_image
                })   
            })
            .catch(function (error){
                console.log(error);
            })
    }

    
    render() {
        return (
            <div>
                <h3 align="left">Карточка для {this.state.card_firstname} {this.state.card_lastname}</h3>   
                
                <ul class="list-group" >
                <div class="col-5" > 
                <p class="text-monospace" >
                <li class="list-group-item list-group-item-success" align="left">First Name: {this.state.card_firstname}</li><br/>
                <li class="list-group-item list-group-item-success" align="left">Last Name: {this.state.card_lastname}</li><br/>
                <li class="list-group-item list-group-item-success" align="left">Email: {this.state.card_email}</li><br/>
                <li class="list-group-item list-group-item-success" align="left">Gender: {this.state.card_gender}</li><br/>
                <li class="list-group-item list-group-item-success" align="left">Image: {this.state.card_image}</li>
                </p>
                </div>
                </ul>
    
                <h3 align="left">
                <a href="/" >Назад</a>  
                     </h3>

                
            </div>
        )
    }
}