import mongoose from "mongoose";
const schema=mongoose.Schema

const userSchema=new schema({
    name:{
        type:String,
        required:false,
        message:["Please enter your first name"]
        
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true
    },
    confirmPassword:{
        type:String,
        required:false
    },
    role:{
        
        enum:{
           values:["farmer", "promoter","processor","researcher","policyMaker","agroDealer"],
            message:'Role must be farmer or promoter or researcher or policyMaker or agroDealer.'
        },
        type:String,
        default: "farmer"
    },
    otp:{
        type:Number,
        required:true
    },
    otpExpires:{
        type:Date,
        required:false
    },
    verified:{
        type:Boolean,
        required:true,
        default:false
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})

const UserModel=mongoose.model("User",userSchema);

export default UserModel;