import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect("mongodb+srv://sreeragrajan:630961@cluster0.bverm.mongodb.net/Order-Eats").then(() => console.log("DB Connected"))
}