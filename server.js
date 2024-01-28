const app = require("express")()
const bodyParser = require("body-parser")
const { startSimulation } = require("./app")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    return res.send({
        message: "ok"
    }).status(200)
})

app.get("/simulate", (req, res) => {
    startSimulation()
    return res.send({
        message: "ok"
    })
})

app.listen(5000, () => {
    console.log("Listening on port: 5000")
})
