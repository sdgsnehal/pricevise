import mongoose from 'mongoose'
let isConnected = false;// to track connection status
export const connectToDB = async () => {
    mongoose.set('strictQuery',true)
    if(!process)
}