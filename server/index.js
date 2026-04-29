const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Routes
const authRoutes = require('./routes/auth');
const checkRoutes = require('./routes/check');
const historyRoutes = require('./routes/history');

app.use('/api/auth', authRoutes);
app.use('/api/check', checkRoutes);
app.use('/api/history', historyRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
