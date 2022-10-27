import connect_database from "../../../utils/database";
import { userRegister } from "../../../model/userRegister";
import { Encrypter } from "../../../library/helper";

export default async function Register(req , res){
    const { name , email , password } = req.body;
    await connect_database().then(()=>{
        try{
            const encryptedPassword = Encrypter(password)
            const user = userRegister({
                name: name,
                email: email,
                password: encryptedPassword
            })
            user.save();
            res.json({
                message: "User Created Successfully",
                name: user.name,
                email: user.email,
                status: true
            })
        }catch(error){
            res.json({
                message: "User cannot be created",
                status: false
            })
        }
        
    }).catch(()=>{
        console.log("Cannot connect to database")
    })
}