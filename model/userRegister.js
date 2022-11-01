import { Schema , model , models} from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        require: true 
    },
    email : {
        type: String,
        require: true,
        unique: true
    },
    password : {
        type : String,
        require : true
    }
})

const userRegister = models.User || model( "User" , userSchema );

export { userRegister };