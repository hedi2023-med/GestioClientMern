
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/client', require('./src/routes/ClientRoute'));
app.use('/deal', require('./src/routes/DealRoute'));
const PORT = 5000;
    
mongoose.connect('mongodb://mongodb:27017/GestioClient')
.then(() => {
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
})
.catch((error) => {
        console.error('Database connection error:', error);
});


