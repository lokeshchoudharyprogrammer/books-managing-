
const mongoose = require('mongoose');
const MongoDbConnection = async () => {
    try {

        await mongoose.connect('mongodb+srv://lokesh:lokeshcz@cluster0.dsoakmx.mongodb.net/bookstore?retryWrites=true&w=majority', { useNewUrlParser: true });
        console.log("Ok")
    } catch (error) {
        console.log("try Again ")

    }
}



module.exports = { MongoDbConnection }