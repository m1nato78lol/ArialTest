import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Pagination from "react-js-pagination";
import axios from 'axios';

const Card = props => (
    <ul>
        <img src={props.card.card_image} class="card-img-top" ></img>
        <li>First Name: {props.card.card_firstname}</li>
        <li>Last Name: {props.card.card_lastname}</li> 
        <br/>
        <Link to={"/get/"+props.card._id} class="btn btn-primary">Подробнее</Link>
    </ul>
)
 
export default class CardsList extends Component {

    constructor(props) {
        super(props);
        this.state = {cards: [],
            activePage: 1
        };

    }

    componentDidMount() {
      
        axios.get('http://localhost:4000/cards/?page='+this.state.activePage)
            .then(response => {
                this.setState({cards: response.data.cards });
                
            })
            .catch(function (error){
                console.log(error);
            })
    }
        
    handlePageChange(pageNumber) {
        axios.get('http://localhost:4000/cards/?page='+pageNumber)
        .then(response => {
            this.setState({cards: response.data.cards });
            
        })
        .catch(function (error){
            console.log(error);
        })
        this.setState({activePage: pageNumber});
        this.props.history.push('/cards?page='+pageNumber);
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

               <br/>    
              
        <Pagination
        hideFirstLastPages
        activePage={this.state.activePage}
        pageRangeDisplayed={9}
        itemsCountPerPage={3}
        totalItemsCount={27}
        itemClass="page-item"
        linkClass="page-link"
        onChange={this.handlePageChange.bind(this)} 
        />          
                   
         </div>
        )
    }
}