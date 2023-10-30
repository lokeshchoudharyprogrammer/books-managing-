const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Book = require('./models/Book.Model');
const { default: MongoDbConnection } = require('./db/db');
const { booksRouter } = require('./Routers/Books');
const cors = require("cors")
const app = express();

app.use(bodyParser.json());
app.use(cors());



app.use('/api/v1', booksRouter)


const port = process.env.PORT || 3003;
app.listen(port, async () => {
    try {
        await mongoose.connect('mongodb+srv://lokesh:lokeshcz@cluster0.dsoakmx.mongodb.net/bookstore?retryWrites=true&w=majority', { useNewUrlParser: true });
        console.log("Ok")

    } catch (error) {

    }
    console.log(`Server is running on port ${port}`);
});