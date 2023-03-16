// import fetch from 'node-fetch';

// async function run() {
//   const response = await fetch(
//     'https://represent.opennorth.ca/postcodes/T2G0E7'
//   );
//   const result = await response.json();

//   console.log(result);
// }

// run();

import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
console.log(process.env.MONGO_URL);
const connectionString = process.env.MONGO_URL;

 

  const db = await mongoose.connect(connectionString);

  const userSchema = new mongoose.Schema({
    username: String,
    email: String,
  });




  const User = db.model("user", userSchema);

  const users = await User.find();


  console.log(users);
