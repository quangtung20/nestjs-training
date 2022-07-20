import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import morgan from 'morgan'
import mainRoute from './routes/index'

dotenv.config() // goi middleware config cho bien moi truong
const app = express()

app.use(cors()) // cho phep tat ca client co the req xuong server
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded())  

app.use('/api',mainRoute);

const URI:string = process.env.MONGODB_URL; //123
const DB_NAME:string = process.env.DB_NAME; 


// Start server listening
const port = process.env.PORT || 5000;

const connectDB = async ()=>{
  await mongoose.connect(URI, {
    autoIndex: false,
    dbName:DB_NAME,
  }, (err) => {
    if(err) throw err;
    console.log('Mongodb connection.');
    app.listen(port, () => {
      console.log(`Express is listening on port ${port}`)
    })
  })
}

connectDB();

