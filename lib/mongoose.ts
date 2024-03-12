import mongoose from 'mongoose'
let isConnected = false;// to track connection status
export const connectToDB = async () => {
    mongoose.set('strictQuery',true)
    if(!process.env.MONGODB_URI) return console.log('mongodb uri is not defined')
    if(isConnected) return console.log('already connected to db')
    try{
    await mongoose.connect(process.env.MONGODB_URI)
    isConnected = true;
    console.log('connected to db')
}catch(error){
}
   
}