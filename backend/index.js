const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')


const app = express()
const port = 3000

app.use(cors());

app.use(express.json())
app.get('/', (req, res) => {
  res.send('Hello World!')
})

const contactRoute = require('./Routes/contact.js')

app.use('/contact', contactRoute)

mongoose.connect('mongodb://localhost:27017/contactdb',
    {
    useNewUrlParser:true,
    useUnifiedTopology : true
    }
    )

const db = mongoose.connection;

db.on('error' , console.error.bind(console, 'connection error'))
db.once('open' , function()  {
    console.log('Database connected successfully')
})


app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})