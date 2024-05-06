const express=require("express");
const app=express();
const mongoose=require("mongoose");
const jwt=require("jsonwebtoken");
const multer=require("multer");
const path=require("path");
const cors=require("cors");
const { log } = require("console");
const PORT = process.env.PORT || 5000;


// Middleware
app.use(cors());
const corsOptions = {
  origin: ['http://localhost:3000','http://localhost:3001'],
};

app.use(cors(corsOptions));
app.use(express.json());

app.use((req,res,next) => {

  console.log(req.method, req.url);
   console.log(res.statusCode);
   console.log(req.body);
   next();
})
// MongoDB Connection
mongoose.connect('mongodb+srv://lanafathima50:FATHLANA@cluster0.urkponn.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB connected')).catch(err => console.error('Could not connect to MongoDB', err));


  // Import routes
  const productRoutes = require('./routes/productRoutes');
  const userRoutes = require('./routes/userRoutes');
  const orderManagement = require("./routes/orderManagement");
  // Use routes
  app.use('/api/products', productRoutes);
  app.use('/', userRoutes);

// Sample route
app.get('/', (req, res) => {
  res.send('E-commerce Backend is running!');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:5000`);
});
