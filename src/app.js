import express from 'express'
import invoiceRoute from './routes/invoiceRoute.js'
import connectDB from './config/db.js'

const app = express(); 
const port = process.env.PORT || 3000;

// connection to database
connectDB();

// registered routes
app.use(express.json());
invoiceRoute(app);

// server
app.listen(port, (err) => {
  if(!err){
    console.log(`Server listening at http://localhost:${port}`);
  } else{
    console.log(`Error: ${err}`);
  }
});
