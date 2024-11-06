const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

// Set view engine to EJS
app.set('view engine', 'ejs');

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));

// Route for Home Page
app.get('/', (req, res) => {
    res.render('home');  // 'home.ejs' view
});

// Route for About Page
app.get('/about', (req, res) => {
    res.render('about');  // 'about.ejs' view
});

// Route for Projects Page
app.get('/projects', (req, res) => {
    res.render('projects');  // 'projects.ejs' view
});

// Route for Contacts Page
app.get('/contacts', (req, res) => {
    res.render('contacts', { success: req.query.success });
});

// Route to handle form submission
app.post('/submit-contact', (req, res) => {
    const { name, email, message } = req.body;
    
    // You would typically handle the form data here (e.g., save to a database, send an email, etc.)
    console.log("Message received:", name, email, message);
    
    // After handling the form submission, redirect with success message
    res.redirect('/contacts?success=true');
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

