const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Mock login
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    if (username === 'user' && password === 'pass') {
        res.json({ success: true, role: 'field' });
    } else {
        res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
});

// Mock tasks
let tasks = [
    { id: 1, title: "Install server rack", assignedTo: "user", status: "open" }
];

app.get('/api/tasks', (req, res) => {
    res.json(tasks);
});

app.post('/api/tasks', (req, res) => {
    const task = req.body;
    task.id = tasks.length + 1;
    tasks.push(task);
    res.json({ success: true, task });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});