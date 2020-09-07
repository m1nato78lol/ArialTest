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
  var page = parseInt(req.query.page) || 1;
  var size = 4;
  var query = {};
  query.skip = size * (page - 1);
  query.limit = size;
      Card.find({},{},query,function(err,card)  {
        if (err) {
            console.log(err);
        } else {
            response={"cards" : card};
            res.json(response);
        }
    });
});


cardRoutes.route('/:id').get(function(req, res) {
    var id = req.params.id;
    Card.findById(id, function(err, card) {
        res.json(card);
    });
});


app.use('/cards',cardRoutes);


app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});