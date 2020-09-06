import React, { Component } from 'react';
import axios from 'axios';

export default class AddCard extends Component {

    constructor(props) {
        super(props);

        this.onChangeCardFirstName = this.onChangeCardFirstName.bind(this);
        this.onChangeCardLastName = this.onChangeCardLastName.bind(this);
        this.onChangeCardEmail=this.onChangeCardEmail.bind(this);
        this.onChangeCardGender=this.onChangeCardGender.bind(this);
        this.onChangeCardImage=this.onChangeCardImage.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        this.state={
            card_firstname: '',
            card_lastname: '',
            card_email: '',
            card_gender: '',
            card_image: ''
        }
    }

    onChangeCardFirstName(e) {
        this.setState({
            card_firstname: e.target.value
        });
    }

    onChangeCardLastName(e) {
        this.setState({
            card_lastname: e.target.value
        });
    }

    onChangeCardEmail(e) {
        this.setState({
            card_email: e.target.value
        });
    }
    onChangeCardGender(e) {
        this.setState({
            card_gender: e.target.value
        });
    }
    onChangeCardImage(e) {
        this.setState({
            card_image: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        
        console.log(`Form submitted:`);
        console.log(`Card FirstName: ${this.state.card_firstname}`);
        console.log(`Card LastName: ${this.state.card_lastname}`);
        console.log(`Card Email: ${this.state.card_email}`);
        console.log(`Card Gender: ${this.state.card_gender}`);
        console.log(`Card Image: ${this.state.card_image}`);

        const newCard = {
            card_firstname: this.state.card_firstname,
            card_lastname: this.state.card_lastname,
            card_email: this.state.card_email,
            card_gender: this.state.card_gender,
            card_image: this.state.card_image
        };

        axios.post('http://localhost:4000/cards/add', newCard)
        .then(res => console.log(res.data));
        
        this.setState({
            card_firstname: '',
            card_lastname: '',
            card_email: '',
            card_gender: '',
            card_image: ''

        })
    }

    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Create New Card</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>First Name: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.card_firstname}
                                onChange={this.onChangeCardFirstName}
                                />
                    </div>
                    <div className="form-group">
                        <label>Last Name: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.card_lastname}
                                onChange={this.onChangeCardLastName}
                                />
                    </div>
                    <div className="form-group"> 
                        <label>Email: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.card_email}
                                onChange={this.onChangeCardEmail}
                                />
                    </div>
                    <div className="form-group"> 
                        <label>Gender: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.card_gender}
                                onChange={this.onChangeCardGender}
                                />
                    </div>
                    <div className="form-group"> 
                        <label>Image: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.card_image}
                                onChange={this.onChangeCardImage}
                                />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create Card" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}