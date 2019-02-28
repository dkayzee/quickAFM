const express = require('express')
const PORT = process.env.PORT || 3001

const app = express()

const {User, Group, Board, PostIt} = require ('./models')

app.get('/', (req, res) => {
    res.send('Welcome to Quick AFM')
})

app.post('/postIt', async (req, res) => {
    try {
        console.log(req.body)
        const postIt = await PostIt.create(req.body)
        res.json(postIt)
    } catch(err) {
        res.status(500).json({
            message: err.message
        })
    }
})

app.listen(PORT, () => {
    console.log(`Up and up on ${PORT}`)
})