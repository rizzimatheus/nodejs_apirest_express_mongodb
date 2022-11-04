import mongoose from "mongoose"

// https://cloud.mongodb.com/
const pwd = process.env.DBPWD;
mongoose.connect(`mongodb+srv://alura:${pwd}@alura.ucvvhhv.mongodb.net/alura_node`);

let db = mongoose.connection;

export default db;