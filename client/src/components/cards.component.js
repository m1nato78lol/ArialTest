import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import logo from "../logo.png";

const Card = props => (
    <ul>
        <img src={logo} class="card-img-top" alt="CodingTheSmartWay.com"></img>
        <li>First Name: {props.card.card_firstname}</li>
        <li>Last Name: {props.card.card_lastname}</li> 
        <br/>
        <Link to={"/get/"+props.card._id} class="btn btn-primary">Подробнее</Link>
    </ul>
)
 
export default class CardsList extends Component {

    constructor(props) {
        super(props);
        this.state = {cards: []};
    }

    componentDidMount() {
        axios.get('http://localhost:4000/cards/')
            .then(response => {
                this.setState({ cards: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }
      
    render() {
        return (
            <div>
                <h3>Cards List</h3>  
                <div class="row">   
              
                {this.state.cards.map(item => (    
                     
                     <div class="col-sm-3"> 
               
                <div class="card">
                <div class="card-body">
                <h5 class="card-title">Card</h5>
                <Card card={item}  />
                </div>
      </div>
    </div>
               ))}
              
               </div>

                            
                      
                   
         </div>
        )
    }
}