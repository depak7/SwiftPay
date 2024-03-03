const mongoose=require('mongoose');

mongoose.connect("mongodb+srv://deepak:123@cluster0.cxhznrt.mongodb.net/Userspaytm");

const userschema=new mongoose.Schema({
    username:String,
    firstname:String,
    lastname:String,
    password:String 
}
);
const accountschema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User',
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
});
const User=mongoose.model('User',userschema);
const Account=mongoose.model('Account',accountschema);

module.exports={
    User,Account
}