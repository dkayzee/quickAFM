const express = require('express')
const PORT = process.env.PORT || 3001

const app = express()

const {User, Group, Board, Card} = require ('./models')

app.get('/', (req, res) => {
    res.send('Welcome to Quick AFM')
})

app.post('/sticky', async (req, res) => {
    try {
        console.log(req.body)
        const sticky = await Card.create(req.body)
        res.json(sticky)
    } catch(err) {
        res.status(500).json({
            message: err.message
        })
    }
})

app.listen(PORT, () => {
    console.log(`Up and up on ${PORT}`)
})