const jwt = require('jsonwebtoken');
const User = require('../models/UserModel');
const bcrypt = require("bcryptjs")

// const register = async (req, res) => {
//     try {
//         const { username, usersurname, email, password } = req.body;


//         const existingUser = await User.findOne({ email });
//         if (existingUser) {
//             return res.status(400).json({ message: 'User already exists with this email' });
//         }


//         const newUser = new User({ username, usersurname, email, password });
//         await newUser.save();
//         res.status(201).json({ message: 'User registered successfully' });
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// };

const register = async (req, res) => {
    try {
        const { username, usersurname, email, password } = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists with this email' });
        }

        // Hash the password
        const saltRounds = 10; // Adjust the number of salt rounds as needed
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const newUser = new User({
            username,
            usersurname,
            email,
            password: hashedPassword // Store the hashed password
        });
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// const login = async (req, res) => {
//     try {
//         const { email, password } = req.body;

//         const user = await User.findOne({ email });
//         if (!user) {
//             return res.status(404).json({ message: 'User not found' });
//         }

//         const isMatch = await user.comparePassword(password, user.password);
//         if (!isMatch) {
//             return res.status(400).json({ message: 'Invalid credentials' });
//         }

//         const token = jwt.sign({ userId: user._id }, 'SECRET_KEY', { expiresIn: '1h' });
//         res.json({ token, userId: user._id, username: user.username });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };


const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Compare the provided password with the hashed password in the database
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Generate a JWT token
        const token = jwt.sign({ userId: user._id }, 'SECRET_KEY', { expiresIn: '1h' });
        res.json({ token, userId: user._id, username: user.username });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};



module.exports = {
    register,
    login,
};
