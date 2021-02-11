const mongoose =require('mongoose');
const {ObjectId} = mongoose.Schema;

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        trim:true,
        required:true,
        maxLength:32,
        text:true
    },
    slug:{
        type: String,
        unique:true,
        lowercase:true,
        index:true,
    },
    email:{
        type: String,
        required:true,
        maxLength:2000,
        text:true
    },
    phone:{
        type: Number,
        trim:true,
        required:true,
        maxLength:32,
    },
    images:{
        type:Array,
    },

   
  },
  {timestamps: true}
  );

  module.exports = mongoose.model('UserDb',productSchema);