const mongoose = require("mongoose");

const connect = () => {
    return mongoose.connect('mongodb://localhost:27017/whatever')
}

// creating scheems
const student = new mongoose.Schema ( {
    firstName : {
        type: String,
        required: true,
        unique: true
},
    faveFoods : [{type: String}],

    info : {
        school : {
            type : String
        },
        shoeSize : {
            type : Number
        }
    }
})

const Student = mongoose.model('student', student)

//connecting with db
connect()
.then(async connection => {
    const student = await Student.create({firstName: 'Tim'})
    const found = await student.find({firstName: 'thi'})
    const foubdById = await student.findById('asgtrfh')
    const uodated = await student.findByIdUpdate('yydssk', {})
    console.log(student)
} )
.catch(e => console.error(e))