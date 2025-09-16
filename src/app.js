import express from 'express'
import connectDB from './config/db.js'
import invoiceRoute from './routes/invoiceRoute.js'


const app = express(); 
const port = process.env.PORT || 3000;


// middleware
app.use(express.json());

// connection to database
connectDB();

// routes
app.use('/api', invoiceRoute);

// server
app.listen(port, (err) => {
  if(!err){
    console.log(`Server listening at http://localhost:${port}`);
  } else{
    console.log(`Error: ${err}`);
  }
});
