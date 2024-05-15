import { Model, Schema, model } from "mongoose";

//interfaz de definicion de tipos
export interface ExpenseInterface {
    name: string;
    amount: number;
    date:Date;
    estado: boolean;
}

//estructura de la base de datos basada en un esquema dado por mongoose, usando el tipo de dato 'ExpenseInterface' pasado como generic
const expenseSchema = new Schema<ExpenseInterface>({
    name: { type: String, required: true },
    amount: { type: Number, required: true },
    date: { type: Date, required: false },
    estado: { type: Boolean, required: true, default: true }
});

//creates a model named anExpense using the Mongoose model function. The model is based on the ExpenseInterface schema defined 
//earlier and is associated with the 'Expense' collection in the database.
const anExpense:Model<ExpenseInterface> = model<ExpenseInterface>('Expense', expenseSchema);

export default anExpense;