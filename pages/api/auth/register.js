import connect_database from "../../../utils/database";
import { userRegister } from "../../../model/userRegister";
import { userVerification } from "../../../model/userVerification";
import { Encrypter } from "../../../library/helper";
import nodemailer from "nodemailer";

export default async function Register(req, res) {
    const { name, email, password } = req.body;
    const { method } = req;
    await connect_database().then(async () => {
        switch (method) {
            case "POST": {
                const encryptedPassword = Encrypter(password)
                const findUser = await userRegister.findOne({ email: email })
                if (findUser === null) {
                    const user = userRegister({
                        name: name,
                        email: email,
                        password: encryptedPassword
                    })
                    user.save().then((resut) => {
                        sendOTPVerificationEmail(resut, res);
                    })
                    res.status(200).json({
                        message: "User Created Successfully",
                        name: user.name,
                        email: user.email,
                        status: true
                    })
                } else {
                    res.status(501).json({
                        message: "User with same Email Exists",
                        status: false
                    })
                }
            }
        }
    }).catch(() => {
        console.log("Cannot connect to database")
    })
}


async function sendOTPVerificationEmail(req, res) {
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'lester.gusikowski22@ethereal.email',
            pass: 'GpN9cPyujSw1BrhxWm'
        }
    });
    const { email } = req.body;
    try {
        const otp = Math.floor(100000 + Math.random() * 99999)

        const mailOptions = {
            from: process.env.AUTH_EMAIL,
            to: email,
            subject: "Verify your Email",
            html: `<p>Enter <b>${otp}</b> in the app to verify your Email Address and complete the Registration process.</p><p>This OTP <b>Expires in 10 Minutes</b></p>`
        }

        const encryptedOTP = Encrypter(otp)

        const verificationDetails = await userVerification({
            email: email,
            otp: encryptedOTP,
            createdAt: Date.now(),
            expiresAt: Date.now() + 600000
        })

        verificationDetails.save()
    } catch (error) {

    }
}