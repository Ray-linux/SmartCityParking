const bcrypt = require("bcryptjs");
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.get('/' , function (req,res){
    res.send("hello world")
})

// Set up MongoDB connection
mongoose.connect('mongodb://localhost:27017/mydb', { useNewUrlParser: true })
.then(()=>console.log("db connected"))
.catch((err)=>console.log("error occured"));


// Define a MongoDB schema
const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
});

//encrypting password before saving
UserSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        return next();
    }
    try {
        this.password = await bcrypt.hash(this.password, 10);
        return next();
    } catch (error) {
        return next(error);
    }
});

// Create a model based on the schema
const User = mongoose.model('User', UserSchema);

// Middleware for JSON parsing
app.use(bodyParser.json());

// Create a route for user registration
app.post('/api/register', async (req, res) => {
  const { name, email, password } = req.body;
  try {
    // Create a new user in the database
    const user = new User({ name, email, password });
    await user.save();
    res.json({ message: 'Registered Successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Registration failed' });
  }
});

// Start the server 
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});