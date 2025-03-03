import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://ashishchaudhari:635202289@cluster0.nujf9.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}