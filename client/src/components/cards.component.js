import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Card = props => (
    <ul>
        <li>First Name: {props.card.card_firstname}</li>
        <li>Last Name: {props.card.card_lastname}</li> 
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

    cardList() {
        return this.state.cards.map(function(currentCard, i){
            return <Card card={currentCard} key={i} />;
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
     
                <a href="#" class="btn btn-primary">Подробнее</a>
                </div>
      </div>
    </div>
               ))}
              
               </div>

                            
                      
                   
         </div>
        )
    }
}