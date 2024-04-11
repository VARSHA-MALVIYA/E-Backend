import mongoose from 'mongoose' ;
import { configDotenv } from 'dotenv';
configDotenv() ;

function DataBaseConnect()
{
    mongoose.connect(process.env.MONGODB_URL, {
        useNewUrlParser : true,
        useUnifiedTopology : true 
    } )
    .then( ()=>{console.log("DataBase Connection Successfull")} )
    .catch((err)=>{
        console.log("Error in DB Connection");
        console.error(err) ;
        process.exit(1) ;
    });
}

export default DataBaseConnect ;
