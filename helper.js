import { client } from './index.js'

async function postIncome(data) {
    return await client
        .db('b252we')
        .collection("Income")
        .insertOne(data);
}

async function getIncome() {
    return await client
        .db('b252we')
        .collection("Income")
        .find({}).toArray();
}

async function postExpense(data) {
    return await client
        .db('b252we')
        .collection("expenditure")
        .insertOne(data);
}

async function getExpense(){
    return await client
        .db('b252we')
        .collection("expenditure")
        .find({}).toArray();
}





export {
    postIncome,
    getIncome,
    postExpense,
    getExpense,
   
}