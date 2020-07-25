const express = require('express')
const path = require('path')
const cors = require('cors')

const signupRouter = require('./routes/signup')
// const taskRouter = require('./routes/tasks')

const app = express()

app.use(cors())
app.use(express.json()) // req.body
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// ROUTES
app.use('/signup', signupRouter)
// app.use('/lists/:id/tasks', taskRouter)

// Start server
app.listen(process.env.PORT || 5000, () => {
    console.log(`Server listening`)
})