import mongoose from 'mongoose';



export const connectDB = async () => {
  try{
    await mongoose.connect('mongodb+srv://cristianluceroala2:qFucAE4LA2fIFpQv@cluster0.gyxeu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
    console.log('conectado');
  }catch(error){
    console.log(error)
  }
  
};


