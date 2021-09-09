const mongoose = require("mongoose");

const connect = () => {
    return mongoose.connect('mongodb://localhost:27017/whatever')
}

const student = new mongoose.Schema ( {
    firstName = String
})

const Student = mongoose.model('student', student)

