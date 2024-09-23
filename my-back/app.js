const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./db/ConnectDB');
const authRouter = require('./routers/authRouter');

dotenv.config();

const app = express();
app.use(express.json());

connectDB();


app.use('/auth', authRouter);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
