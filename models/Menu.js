const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
    name:{
        type : String,
        required : true,
    },
    price:{
        type : Number,
        required : true,
    },
    taste:{
        type : String,
        enum :['spicy','sweet','sour'],
    },
    is_Drink:{
        type : Boolean,
        default : false
    },
    ingredients:{
        type:[String],
        default:[],
    },
    num_Sales:{
        type:Number,
        default:0
    }
});


const Menu = new mongoose.model('Menu',menuSchema);

module.exports = Menu;