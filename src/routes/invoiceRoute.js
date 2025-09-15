const invoiceRoute = (app) => { 
    // get all invoice
    app.get('/api/invoice', (req, res) => {
        console.log(req.query)
        res.send('Invoice microservice');
    });
    //get inovice by id
    app.get('/api/invoice/:id', (request,response) =>{
        console.log(request.params);
        const parsedId = parseInt(request.params.id);
        console.log(parsedId);
        if(isNaN(parsedId)){
            response.status(404).send({msg: 'bad request'})
        }
        //find invoice
        const findInvoice = mockUsers.find(user => user.id === parsedId);
        if(!findInvoice){
            response.status(404).send({msg: 'invoice not found'})
        }
        response.send(findInvoice);
    });
    
}

export default invoiceRoute