import mongoose from "mongoose";


export const Connection = async (username,password)=>{
    const URL =`mongodb+srv://${username}:${password}@ecommerce-web.lqxxtfv.mongodb.net/?retryWrites=true&w=majority`;
    try{
      await mongoose.connect(URL,{useUnifiedTopology:true, useNewUrlParser:true})
      console.log("Database Connected Sucessfully")

    }catch(error){
        console.log("Error while connection",error.message)
    }
}
export default Connection