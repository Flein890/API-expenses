import {Request,Response} from 'express';
import  anExpense  from '../models/expenses';
import { ExpenseInterface } from '../models/expenses';


//obtencion de datos
export const getData = async ({}, res: Response) => {
    let condition = {estado:true};
    const expenses = await anExpense.find(condition);
    res.json({expenses});
    console.log('recibido')
}

//obtencion de un solo dato por id
export const getDataByName = async (req: Request, res: Response) => {

    const {name} = req.params;
    const expense: ExpenseInterface | null = await anExpense.findOne({name:name});
    res.json({expense});

}

//post almacena archivos en la base de datos
export const postData = async (req: Request, res: Response) => {

    const expenseData = req.body;
    if(!req.body) {return res.status(400).json({message: 'Bad Request'});}

    const newExpense = new anExpense(expenseData);

    await newExpense.save();

    res.json({
        msg:'Expense saved',
        newExpense    
    })
   
   
    // const {name,amount,date} = req.body;

    // const newExpense:ExpenseInterface = new anExpense({name,amount,date,estado:true});
}


//revisar esto ------------------>
export const deleteData = async (req: Request, res: Response) => {

    const {name} = req.params;
    const deletedExpense:ExpenseInterface | null = await anExpense.findByIdAndDelete(name);
}

