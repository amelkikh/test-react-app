const express = require('express')
const cors = require('cors');
const app = express()
const port = 3001

//TODO: Check env !=prod
const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions))

app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.use('/api', require('./controllers/api.controller'));

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})
