import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/medi-app");

const db = mongoose.connection();

db.on('erro', console.error.bind(console, 'connection erro: '));

db.once('open', () => 
    console.log('Database conected sucessfully')
);

export default db;
