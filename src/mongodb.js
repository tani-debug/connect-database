const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/userDB' , {// Name of our database-> userDB
    useNewUrlParser: true,
    useUnifiedTopology: true
})

.then(() => {
    console.log('Connected to MongoDB');
})
.catch(() => {
    console.log('Failed to connect to MongoDB');
});

const LogInSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    password:{
        type: String,           
        required: true
    },
})

const collection = new mongoose.model("Collection1", LogInSchema);

module.exports = collection