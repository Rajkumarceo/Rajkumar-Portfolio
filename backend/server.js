const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// API Endpoint Example
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Backend is fully operational.' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
