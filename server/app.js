require('dotenv').config()
const express = require('express')
const path = require('path')
const cors = require('cors')

const registerRouter = require('./routes/register')
// const taskRouter = require('./routes/tasks')

const app = express()

app.use(cors())
app.use(express.json()) // req.body
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// ROUTES
app.use('/register', registerRouter)
// app.use('/lists/:id/tasks', taskRouter)

// Start server
const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Server is started on ${port}`))