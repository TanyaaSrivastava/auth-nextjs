import { verify } from "crypto";
import mongoose from "mongoose";
import { unique } from "next/dist/build/utils";
import { type } from "os";

const userSchema = new mongoose.Schema({
    username: {
        type: string,
        required : [true, "please provide a username"],
        unique: true,
    },
    email : {
        type: string,
        required : [true, "please provide a email"],
        unique: true,
    },
    password : {
        type: string,
        required : [true, "please provide a password"],
        
    },
    isVerfied: {
        type: Boolean,
        default: true,
    },
    isAdmin:{
        type:Boolean,
        default: false,
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken : String,
    verifyTokenExpiry: Date,
})

const User = mongoose.model.users || mongoose.model("user", userSchema);
export default User;
