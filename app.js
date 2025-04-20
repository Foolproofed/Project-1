const express = require('express');
const path = require('path');
const bodyParser = require('express');

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname)));

// POST request from contact
app.post('/submit-form', (req, res) => {
    const { name, email, message } = req.body;
    console.log('Form submission:', { name, email, message });

    // Sending back confirmation message
    res.send(`<h1>Thank you, ${name}! Your submission has been sent.</h1>`);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});