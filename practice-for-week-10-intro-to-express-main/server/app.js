const express = require('express')

const app = express()



const port = 5000

app.listen(port,() => {
    console.log('server is listening on', port)
})

app.get('/status', (req, res) => {
    res.send('Server is up and running')
})