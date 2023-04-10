const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello ji kaise ho sare this is Sourav')
})

app.listen(4000, ()=>{
    console.log("Started server");
}
)
