
import mongoose from "mongoose";

const Connection = async (User,Pass) => {
    const URL = `mongodb://${User}:${Pass}@ecommerce-data-shard-00-00.r5yn8.mongodb.net:27017,ecommerce-data-shard-00-01.r5yn8.mongodb.net:27017,ecommerce-data-shard-00-02.r5yn8.mongodb.net:27017/?ssl=true&replicaSet=atlas-hsc3kv-shard-0&authSource=admin&retryWrites=true&w=majority`
    try{
       await mongoose.connect(URL,{ useUnifiedTopology: true, useNewUrlParser: true})
        console.log('Database connected successfully');
    }catch(error){
        console.log('Error while connecting with database',error.message);
    }
}

export default Connection