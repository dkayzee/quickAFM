const app = require('express')();
const http = require('http').createServer(app)
const io = require('socket.io')(http)
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3001

app.use(bodyParser.json())

const {User, Group, Board, PostIt} = require ('./models')

app.get('/', (req, res) => {
    res.send('Welcome to Quick AFM')
})

app.post('/postIt', async (req, res) => {
    try {
        console.log(req.body)
        const postit = await PostIt.create(req.body)
        res.json(postit)
    } catch(err) {
        res.status(500).json({
            message: err.message
        })
    }
})

io.on('connection', (socket) => {
    console.log('A user connected')

    socket.on('greet', (msg) => {
        console.log(msg)
        socket.emit('respond', {hello: 'welcome user'})
    })
    socket.on('disconnect', () => {
        console.log('A user disconnected')
    })
})

http.listen(PORT, () => {
    console.log(`Up and up on ${PORT}`)
})