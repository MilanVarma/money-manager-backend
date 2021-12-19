import express from 'express';
import { 
    postIncome,
    getIncome,
    postExpense,
    getExpense,
    
} from '../helper.js';

const Router = express.Router();

Router
.route('/income')
.get(async(req,res)=>{
    const getincomeData = await getIncome();
    res.send(getincomeData);
})
.post(async(req,res)=>{
    const data = req.body;
    const postincomeData = await postIncome(data);
    res.send(postincomeData);
})

Router
.route('/expenditure')
.get(async(req,res)=>{
    const getExpenseData = await getExpense();
    res.send(getExpenseData);
})
.post(async(req,res)=>{
    const data = req.body;
    const postExpenseData = await postExpense(data)
    res.send(postExpenseData);
})






export const expenseRouter = Router;