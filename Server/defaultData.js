import {products} from "./Constant/Data.js"
import Product from "./Model/productSchema.js"

const DefaultData = async ()=>{
    try{
      await Product.insertMany(products)


      console.log('Data imported sucessfully')
    }catch(error)
    {
        console.log("there is error")
    }
}

export default DefaultData;