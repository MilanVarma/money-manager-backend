import express from 'express';
import cors from 'cors'
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
import {expenseRouter} from './routes/Expenses.js'


dotenv.config()
const app = express()
const MONGO_URL = process.env.MONGO_URL;
const PORT = process.env.PORT || 9000;

app.use(express.json())
app.use(cors())

async function createConnection(){
    const client = new MongoClient (MONGO_URL);
    await client.connect();
    console.log('mongodb connected');
    
    return client;
    
}

export const client = await createConnection();

app.get('/',(req,res)=>{
    res.send('Hello');
})

app.use('/expenses',expenseRouter)




app.listen(PORT,console.log(`Listening on Port ${PORT}`))
