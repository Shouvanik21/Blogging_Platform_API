const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    content:{
        type:String,
        required:true,
    },
    author:{
        type:String,
        required:true,
    },
    tags:[{
        type:String,
    }],
    published:{
        type:Boolean,
        required:false,
    },

})

const articleModel=mongoose.model("articleModel",articleSchema)
module.exports=articleModel