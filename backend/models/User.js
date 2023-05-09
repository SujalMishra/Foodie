const mongoose = require('mongoose')

const {Schema} = mongoose;

const UserSchema = new Schema({
    name:{
        type: String,
        rquired:true
    },
    location:{
        type:String,
        required:true
    },
    email:{
        type: String,
        rquired:true
    },
    password:{
        type: String,
        rquired:true
    },
    date:{
        type:Date,
        default:Date.now
    }
});

module.exports = mongoose.model('user',UserSchema);