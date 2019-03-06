const app = require('express')();
const http = require('http').createServer(app)
const io = require('socket.io')(http)
const bodyParser = require('body-parser')
// const bcrypt = require('bcrypt')
const PORT = process.env.PORT || 3001

app.use(bodyParser.json())

const {db, User, Group, Board, PostIt} = require ('./models')

app.get('/', (req, res) => {
    res.send('Welcome to Quick AFM')
})

app.get('/board', async (req,res)=>{
    try {
        const board = await Board.findAll()
        res.json(board)
    } catch(e){
        res.status(500).json({error: e.message})
    }
})

app.get('/group', async (req,res)=>{
    try{
        const group = await Group.findAll()
        res.json(group)
    } catch(e){
        res.status(500).json({error: e.message})
    }
})

app.get('/group/:id', async (req, res) => {
    try {
        const member = await Group.find({
            where: {
                id: req.params.id
            }, include : [User]
        })
        res.json(member)
    } catch(e){
        console.log(e.message)
    }
})

app.post('/users/login', async(req,res)=>{
    const invalidMsg = 'Invalid email or password'
    try {
        const user = await User.findOne({
            where: {
                email: req.body.email
            }
        })
        if (!user) {
            return res.status(400).json({user: null, loggedIn: false})
        }
        const {first_name, last_name, email, id, password: hash} = user
        // const match = await bcrypt.compare(req.body.password, hash)
        // if (!match) {
        //     return res.status(400).json({user: null, loggedIn: false})
        // }
        const userToSend = {
            id: id,
            email: email,
            name: `${first_name} ${last_name}`
        }
        return res.json({user: userToSend, loggedIn: true})
    } catch (e) {
        res.status(500).json({message: e.message})
    }
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

    socket.on('user', (msg) => {
        console.log(msg)
        socket.emit('respond', msg)
    })
    socket.on('disconnect', () => {
        console.log('A user disconnected')
    })
})

http.listen(PORT, () => {
    console.log(`Up and up on ${PORT}`)
})