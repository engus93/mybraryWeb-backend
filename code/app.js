const express = require('express')
const app = express()

app.use(express.static(__dirname));

app.get("/", (req, res) =>  res.sendFile(__dirname + "index.html"))
app.get('/sign_up', (req, res) => res.sendFile(__dirname + '/sign/sign_up.html'))
app.get('/sign_in', (req, res) => res.sendFile(__dirname + '/sign/sign_in.html'))
 
app.listen(3000, () => console.log('Example app listening on port 3000!'))