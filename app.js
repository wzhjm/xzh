const express = require('express')
const app = express()
const port = 8080
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(express.static('dist'))
app.listen(port, () => {
    console.log('listen:' + port)
})