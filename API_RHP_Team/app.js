const express = require('express')
const logger = require('morgan')
const mongoClient = require('mongoose')

// Set up connect monggoDB = mongoose
mongoClient.connect('mongodb://localhost')
.then(() => console.log("Connected to MongoDB") )
.catch() => console.error(`Connect database failed with error which is ${error}`)

const userRoute = require('./routes/users')

const app = express()
// Midlleware
app.use(logger('dev'))


// Routes
app.use('/users', userRoute)

 
// Routes
app.get("/", (req,res,next) => {
    return res.status(200).json({
        message: "Server is OK!"
    })
})


// Catch 404 error and forward to error handler
app.use((req, res, next) => {
    const err = new Error('Not Found')
    err.status = 404 
    next(err)
})

// Error handler function 
app.use(() => {
    const error = app.get('env') === 'development' ? err : {}
    const status = err.status || 500

    //response to client
    return res.status(status).json({
        error: {
            message: error.message
        }
    })
})

// Start the server 
const port = app.get('port') || 3000
app.listen(port, () => {
    console.log(`Server is running on ${port}`);
})