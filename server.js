
import Cards from './dbCards.js'
import express from 'express'
import mongoose from 'mongoose'
import Cors from 'cors'

// App config
const app = express();
const port = process.env.PORT || 8001;
const connection_url = 'mongodb+srv://adminsunil:ZpdtpLzZP9cWiJbu@cluster0.cm6da.mongodb.net/mytinderdb?retryWrites=true&w=majority'


// middleware
app.use(express.json());
app.use(Cors());



// DB config
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
})


// Api End points
app.get('/', (req, res) => res.status(200).send("hello sunil well done"))

app.post('/tinder/cards', (req, res) => {
    const dbCard = req.body;

    Cards.create(dbCard, (err, data) => {
        if (err) {
            res.status(500).send(err)
        }
        else {
            res.status(201).send(data)
        }
    })
})

app.get('/tinder/cards', (req, res) => {
    Cards.find((err, data) => {
        if (err) {
            res.status(500).send(err)
        }
        else {
            res.status(200).send(data)
        }
    })
})

// Listener
app.listen(port, () => console.log(`listening on port : ${port}`))