const express = require('express')
const config = require('./config')
const app = express();
const apiRouter = require('./routes/apiRouter')

app.use('/api',apiRouter)

app.listen(config.PORT,()=>{

  console.log(`Listening ${config.PORT}`)

})