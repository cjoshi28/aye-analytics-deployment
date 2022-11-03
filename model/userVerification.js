import { Schema , model , models } from "mongoose";

const verificationSchema = new Schema({
    email : {
        type: String,
        require: true,
    },
    otp : {
        type : Number,
        require : true
    },
    createdAt : {
        type : Date,
        require : true
    },
    expiresAt : {
        type : Date,
        require : true
    }
})

const userVerification = models.Verification || model( "Verification" , verificationSchema );

export { userVerification };