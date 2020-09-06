const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const cardRoutes=express.Router();
const PORT = 4000;

let Card = require('./card.model');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/cards', function (err) {
 
    if (err) throw err;
  
    console.log('Successfully connected');
  
 });
cardRoutes.route('/').get(function(req, res) {
    Card.find(function(err, cards) {
        if (err) {
            console.log(err);
        } else {
            res.json(cards);
        }
    });
});

cardRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    Card.findById(id, function(err, card) {
        res.json(card);
    });
});

cardRoutes.route('/add').post(function(req, res) {
    let card = new Card(req.body);
    card.save()
        .then(card => {
            res.status(200).json({'card': 'card added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new card failed');
        });
});

app.use('/cards',cardRoutes);


app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});