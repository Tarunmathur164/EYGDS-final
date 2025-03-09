import mongoose from "mongoose";

export const connectDB = async (req, res) => {
    //mongo server url
    const url = "mongodb+srv://hitman:okthen2004@cluster0.12zox.mongodb.net/";

    const {connection} = await mongoose.connect(url);

    console.log(`MongoDB Connection successful to ${connection.host}`);

}