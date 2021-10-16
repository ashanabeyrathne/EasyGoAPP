const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const passengerSchema = new Schema({

    name : {
        type : String,
      
    },
    email : {
        type: String,
        
    },
    mobile : {
        type: Number,
       
    },
    amount : {
        type: Number,
       
    },
    address : {
        type: String,
        
    }

})

const Passenger = mongoose.model("Passenger",passengerSchema)

module.exports = Passenger;