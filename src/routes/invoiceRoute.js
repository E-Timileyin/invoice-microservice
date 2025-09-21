import express from 'express';
import { createInvoice, deleteInvoice, getAllInvoices, getInvoiceById, updateInvoice } from '../services/invoiceService.js';

const router = express.Router();

// create invoice
router.post('/invoices', async (req, res) => {
    try {
        const invoice = await createInvoice(req.body);
        res.status(201).json(invoice);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

// get all invoices
router.get('/invoices', async (req, res) => {
    try {
        const invoices = await getAllInvoices();
        res.status(200).json(invoices);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

// get invoice by id
router.get('/invoices/:id', async (req, res) => {
    try {
        const invoice = await getInvoiceById(req.params.id);
        res.status(200).json(invoice);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})


// update invoice
router.put('/invoices/:id', async (req, res) => {
    try {
        const invoice = await updateInvoice(req.params.id, req.body);
        res.status(200).json(invoice);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

// delete invoice
router.delete('/invoices/:id', async (req, res) => {
    try {
        const invoice = await deleteInvoice(req.params.id);
        res.status(200).json(invoice);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

export default router;