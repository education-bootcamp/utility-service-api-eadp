const mongoose = require('mongoose');
const cartSchema= new mongoose.Schema(
    {
        date:{
            type:Date,
            required:true
        },
        qty:{
            type:Number,
            required:true
        },
        user:{
            type:Number,
            required:true
        },
        product:{
            type:Number,
            required:true
        }
    }
);

module.exports=mongoose.model('cart',cartSchema);
