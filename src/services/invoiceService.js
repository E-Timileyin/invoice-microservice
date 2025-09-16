import Invoice from "../model/invoice.js";

// create invoice
export const createInvoice = async (invoice) => { 
    const newInvoice = new Invoice(invoice);
    return await newInvoice.save();
}

// get all invoices
export const getAllInvoices = async () => { 
    return await Invoice.find();
}

// get invoice by id
export const getInvoiceById = async (id) => { 
    return await Invoice.findById(id);
}

// delete invoice
export const deleteInvoice = async (id) => { 
    return await Invoice.findByIdAndDelete(id);
}

// update invoice
export const updateInvoice = async (id, invoice) => { 
    return await Invoice.findByIdAndUpdate(id, invoice, { new: true });
}
