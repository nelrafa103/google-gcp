const express = require('express')
const app = express()
const port = 3000

// Habilitando modulo para obtener valores en json (wow)
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

app.post("/",(req, res) => {
    console.log(req.body)
    res.json({
        respuesta: "Valida"
    })
})
