import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'

//Routes
import testRoute from './routes/test'


// Connect to MongoDB
const key = require('./config/keys').mongoURI;
mongoose
  .connect(key)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));


const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Enable cors for file upload
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

//Api routes, add test att localhost:5000/api/test/addTest
app.use('/api/test', testRoute)

// Base routes
app.get('/', (req, res) => {
  res.json(
    'server is very hot!'
  )
})

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Server running on port ${port}`))

export default app
