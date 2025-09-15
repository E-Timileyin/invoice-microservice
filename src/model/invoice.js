import mongoose from "mongoose";

const schema = mongoose.Schema({
    id: String,
    invoiceNumber: String,
    customerId: String,
    items: [
        {
            description: String,
            quantity: Number,
            unitPrice: Number,
            total: Number
        }
    ],
    subtotal: Number,
    tax: Number,
    discount: Number,
    totalAmount: Number,
    currency: String,
    status: String,
    dueDate: Date,
    paymentDate: Date,
    notes: String,
    createdAt: Date,
    updatedAt: Date
});

const model = mongoose.model("Invoice", schema);
export default model;
