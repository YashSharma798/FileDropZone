import mongoose from 'mongoose';

const DBconnection = async() =>
 {

    const MONGODB_URI = `mongodb://yash:yash1234@ac-l0io92v-shard-00-00.55yzcd0.mongodb.net:27017,ac-l0io92v-shard-00-01.55yzcd0.mongodb.net:27017,ac-l0io92v-shard-00-02.55yzcd0.mongodb.net:27017/?ssl=true&replicaSet=atlas-hyzhdj-shard-0&authSource=admin&retryWrites=true&w=majority`
    try{
       await mongoose.connect(MONGODB_URI,{useNewUrlParser :true});
        console.log('Connection success');

    }catch(error)
    {
        console.log('Error While connecting with the database',error.message);
    }
}

export default DBconnection;