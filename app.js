const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Set express to listen to the public directory
const port = process.env.PORT || 5001;

// Create deedRoutes
const bankAPIRoutes = require('./routes/api/bankAPIRoutes');

// *****************************************************************
// ******************        Database Setup       ******************
// *****************************************************************
function setUpDatabase() {
    // DB Config
    const db = require('./config/key').mongoURI;

    // Get a reference to the mongoose data model package
    const mongoose = require('mongoose');

    // Actually connect to the database (lets use a promise)
    mongoose.connect(db, {useNewUrlParser: true}).then(
        () => {
            console.log("Successfully connected to the database.");
        },
        err => {
            console.log("ERROR connecting to the database.");
            throw err;
        }
    );
}

// Comment this if you want to run database setup
setUpDatabase();

const setupController = require('./controllers/setupController');
setupController(app);

const apiController = require('./controllers/apiController');

apiController(app);

// Bodyparser Middleware
app.use(bodyParser.json());

// Use Routes
app.use('/api/', bankAPIRoutes);

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

console.log(`Listener started on port ${port}...`);
app.listen(port);

