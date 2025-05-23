import mongoose from "mongoose";


export async function connect() {
    try{
        mongoose.connect("mongodb+srv://tanyaa:Tanya1518@@cluster0.dfjil.mongodb.net/");
        const connection = mongoose.connection;

        connection.on('connected', () => {
          console.log('Mongodb connected succesfully');
        })
        connection.on('error',(err) => {
            console.log('Mongodb connection error ' + err);
            process.exit();
        } )
    
}catch(error) {
    console.log('something goes wrong!');
    console.log(error);
}
    }
