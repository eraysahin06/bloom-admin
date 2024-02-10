const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Import the cors package
require('dotenv').config();

const app = express();

app.use(express.json());


// Allow all origins for CORS (you may want to restrict this in production)
app.use(cors());

// Import product routes
const productRoutes = require('./routes/products');

// Mount product routes at /api/products
app.use('/api/products', productRoutes);

const connectToMongoDB = async () => {
    try {
        await mongoose.connect(`mongodb+srv://eraysahinmoon:${process.env.MONGO_PW}@cluster0.dickyb3.mongodb.net/?retryWrites=true&w=majority`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
};

const db = mongoose.connection;

db.on('error', (error) => {
    console.error('Error connecting to MongoDB:', error);
});

db.once('open', () => {
    console.log('Successfully connected to MongoDB.');

    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});

connectToMongoDB();
