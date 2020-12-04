const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")
const Cards = require("./dbCards")


//app config
const app = express();
const port = process.env.PORT || 8001

const connection_url = `mongodb+srv://admin:4sPfImpUhthk0Cf8@cluster0.tuq7m.mongodb.net/swiperdb?retryWrites=true&w=majority`

//middleware

app.use(express.json());
app.use(cors());

//DB config
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
})

//API endpoints
app.get("/", (req, res) => res.status(200).send("hello world"));

app.post("/swiper/cards", (req,res) => {
    const dbCard = req.body;

    Cards.create(dbCard, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
});

app.get("/swiper/cards", (req,res) => {
    Cards.find((err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    })
})





//Listener
app.listen(port, () => console.log(`listening on localhost: ${port}`));