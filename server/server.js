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

//Api routes, add test att localhost:5000/api/test/addTest
app.use('/api/test', testRoute)

// Base routes
app.get('/', (req, res) => {
  res.send({
    message: 'server is very hot!'
  })
})

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Server running on port ${port}`))

export default app
