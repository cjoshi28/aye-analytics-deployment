import connect_database from "../../../utils/database";
import { userRegister } from "../../../model/userRegister";
import { Decrypter } from "../../../library/helper";
import Jwt from "jsonwebtoken";

export default async function Login(req , res){
    const { email , password } = req.body;
    await connect_database().then(async()=>{

        const databaseInfo = await userRegister.findOne({ email: email })

        if(databaseInfo !== null){

            const decryptedPassword = Decrypter(databaseInfo.password)

            if(password === decryptedPassword){
                const jwtToken = Jwt.sign({ exp: Math.floor(Date.now()/1000) + (60 * 60) , User : req.body},process.env.JWT_KEY)
                res.json({
                    message: "Login Successful",
                    name: databaseInfo.name,
                    email: databaseInfo.email,
                    token: jwtToken,
                    status: true
                })
            }else{
                res.json({
                    message: "Credentials doesn't match",
                    status: false
                })
            }
        }else{
            res.json({
                message: "Credentials doesn't match",
                status: false
            })
        }
        
    }).catch(()=>{
        console.log("Cannot connect to database")
    })
}