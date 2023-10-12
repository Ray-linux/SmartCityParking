import mongoose from "mongoose";

const studentSchema = mongoose.Schema({
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    post:{
        type: Boolean,
        required: true,
    },
    phone:{
        type: Number,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
});




const student = mongoose.model('student', studentSchema);

export default student;