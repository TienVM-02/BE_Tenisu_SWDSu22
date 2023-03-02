const express = require('express')
const app = express()
const {rootRoute} = require('./router/root_route')
app.use(express.json())

const port = 3010

app.use('/tenisu_v1', rootRoute)

app.listen(port, () => {
   console.log (`Server listen port: ${port}`)
})