import mongoose from 'mongoose';



export const connectDB = async () => {
  try{
    await mongoose.connect('mongodb+srv://cristianluceroala2:kiry123@cluster0.edgbh.mongodb.net/');
    console.log('conectado');
  }catch(error){
    console.log(error)
  }
  
};


