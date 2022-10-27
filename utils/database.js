import mongoose from "mongoose";


const connect_database = async () => mongoose.connect(process.env.MONGO_URI)


export default connect_database;