import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('enter your url').then(()=>console.log("DB Connected"));
}
