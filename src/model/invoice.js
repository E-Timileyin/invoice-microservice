import mongoose from "mongoose"

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
    paymentDate: {

    },
    notes: String,
    // cannot change
    createdAt: {
        type: Date,
        immutable: true,
        default: () => Date.now,
    },
    // cannot change
    updatedAt: {
        type: Date,
        immutable: true,
        default: () => Date.now,
    }
});

const model = mongoose.model("Invoice", schema);
export default model;
