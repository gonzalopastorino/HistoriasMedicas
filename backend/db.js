import mongoose from 'mongoose';



export const connectDB = async () => {
  try{
    await mongoose.connect('mongodb+srv://samtinofernandez884:QhAl1robXXgTs5hD@cluster0.cgc27.mongodb.net/');
    console.log('conectado');
  }catch(error){
    console.log(error)
  }
  
};


