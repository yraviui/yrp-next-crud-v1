import mongoose from "mongoose";

const connectMongoDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://yravi:yrp12345@cluster0.xau9o.mongodb.net/p02-yrp-crud-db')
        console.log('MongoDB Connected')
    } catch (err) {
        console.log(err)
    }
}

export default connectMongoDB