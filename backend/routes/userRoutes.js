const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../model/user');

// Register endpoint
router.post('/register', async (req, res) => {
    console.log(req.body);
    try {
        const { firstName,lastName , email,mobileNumber, password } = req.body;

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create new user
        const newUser = new User({
            firstName,
            email,
            lastName,
            mobileNumber,
            password: hashedPassword
        });

        // Save user and respond
        const user = await newUser.save();
        res.status(201).send(user);
    } catch (error) {
        // res.status(500).json(error);
        console.log(error);
    }
});

// Login endpoint
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if user exists
        const user = await User.findOne({ email });
        if (!user) return res.status(404).send('User not found');

        // Validate password
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) return res.status(400).send('Invalid password');

        // Create and assign a token
        const token = jwt.sign(
            { _id: user._id },
            '123',
            { expiresIn: '1h' }
        );

        res.status(200).json({ token, firstName: user.firstName });
    } catch (error) {
        console.log(error);
    }
});



router.get('/userList',async (req, res) => {
    try {
        
        const user = await User.find()

        res.status(200).send(user)
    } catch (error) {
        console.log(error);
    }
})
module.exports = router;