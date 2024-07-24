const express = require('express');
const app = express();
const path = require('path');

// Middleware to parse JSON bodies
app.use(express.json());

app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.json({ message: 'homepage endpoint hit' });
});

// Endpoint for app launch
app.get('/auth/start', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.json({ message: 'App launch endpoint hit' });
});

// Endpoint for authentication callback
app.get('/auth/callback', (req, res) => {
    const authCode = req.query.code;
    res.setHeader('Content-Type', 'application/json');
    if (authCode) {
        // Handle the authorization code
        res.json({ message: 'Authorization code received', code: authCode });
    } else {
        res.status(400).json({ error: 'No authorization code received' });
    }
});

// Endpoint for logout
app.get('/logout', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.json({ message: 'Logout endpoint hit' });
});

// Endpoint for JWKS file
app.get('/jwks.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.sendFile(path.join(__dirname, 'jwks.json'));
});

const port = 8080;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
