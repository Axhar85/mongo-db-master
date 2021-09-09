const mongoose = require("mongoose");

const connect = () => {
    return mongoose.connect('mongodb://localhost:27017/whatever')
}

// creating scheems
const student = new mongoose.Schema ( {
    firstName : String
});

const Student = mongoose.model('student', student)

//connecting with db
connect()
.then(async connection => {
    const student = await Student.create({firstName: 'Tim'})
    console.log(student)
} )
.catch(e => console.error(e))