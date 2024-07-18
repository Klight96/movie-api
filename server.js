const express = require('express');
const app = express();
const path = require('path');





// Middleware to parse JSON bodies
app.use(express.json());

// Endpoint for app launch
app.get('/auth/start', (req, res) => {
    res.send('App launch endpoint hit');
});

// Endpoint for authentication callback
app.get('/auth/callback', (req, res) => {
    const authCode = req.query.code;
    if (authCode) {
        // Handle the authorization code
        res.json({ message: 'Authorization code received', code: authCode });
    } else {
        res.status(400).json({ error: 'No authorization code received' });
    }
});

// Endpoint for logout
app.get('/logout', (req, res) => {
    res.send('Logout endpoint hit');
});




app.get('/jwks.json', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.sendFile(path.join(__dirname, 'jwks.json'));
});

const port = 8080;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
