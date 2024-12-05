const mongoose = require('mongoose');

const User=new mongoose.Schema({
    username :{
        type : 'string',
        required : true
    },
    password : {
        type : 'string',
        required : true
    },
    confirmPassword : {
        type : 'string',
        required : true
    },
    email:{
        type :'string',
        required : true
    },
    favorites: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Book' }],

})

module.exports = mongoose.model('User',User)