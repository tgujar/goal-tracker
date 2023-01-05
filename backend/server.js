const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const {errorHandler} = require('./middleware/errorMiddleware');
const connectDB = require('./config/db')

const port = process.env.PORT || 3000;

connectDB()
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: false}));

app.use('/api/goals', require('./routes/goalRoutes'))

app.use(errorHandler); // error handling middleware has to be registered last

app.listen(port, () => console.log(`Server running on port ${port}`));