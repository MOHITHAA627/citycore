const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Backend is running!');
});

app.get('/api/departments', (req, res) => {
  res.json([
    { name: 'Public Works', activeProjects: 12, budget: '45L' },
    { name: 'Water Supply', activeProjects: 8, budget: '32L' },
  ]);
});

// 👇 This is the line that starts the server!
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
