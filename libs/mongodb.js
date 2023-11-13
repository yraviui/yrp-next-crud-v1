import mongoose from "mongoose";

const connectMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log('MongoDB Connected')
    } catch (err) {
        console.log(err)
    }
}

export default connectMongoDB