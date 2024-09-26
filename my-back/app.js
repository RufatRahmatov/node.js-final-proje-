const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./db/ConnectDB');
const cors = require("cors")
const authRouter = require('./routers/authRouter');
const productRoutes = require('./routers/productRouters');
const materialRoutes = require("./routers/materialRouter")
// const connectDB = require('./db/materialDB');
const corsOptions = {
    credentials: true,
    origin: ['http://localhost:3000']
};

dotenv.config();

const app = express();
app.use(express.json());


connectDB();

app.use(cors(corsOptions));

app.use('/auth', authRouter);
app.use('/api', productRoutes);
app.use('/api', materialRoutes);


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
