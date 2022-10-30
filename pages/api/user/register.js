import connect_database from "../../../utils/database";
import { userRegister } from "../../../model/userRegister";
import { Encrypter } from "../../../library/helper";

export default async function Register(req , res){
    const { method } = req;
    const { name , email , password } = req.body;
    await connect_database().then(async()=>{
        switch ( method ){
            case "POST": {
                const encryptedPassword = Encrypter(password)
                const findUser = await userRegister.findone({email: email})
                if(findUser !== null){
                    const user = userRegister({
                        name: name,
                        email: email,
                        password: encryptedPassword
                    })
                    user.save();
                    res.status(200).json({
                        message: "User Created Successfully",
                        name: user.name,
                        email: user.email,
                        status: true
                    })
                }else{
                    res.status(501).json({
                        message: "User with same Email Exists",
                        status: false
                    })
                }
            }
        }
    }).catch(()=>{
        console.log("Cannot connect to database")
    })
}