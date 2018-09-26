// We first need to load our mongoose data model
const Accs = require('../models/kingdomBankModel');

// Include body parser
const bodyParser = require('body-parser'); // In node_modules

module.exports = function (app) {

    app.use(bodyParser.json()); // Use body parser middleware
    app.use(bodyParser.urlencoded({extended: true})); // Parse out any JSON from body and handle URL encoded data

    //  Add a method to get all Accs for a particular User (uname)
    app.get('/api/todo/:uname', function (req, res) {

        // ROUTE: GET a user's list of Accs
        Accs.find({username: req.params.uname}, function (err, Accs) { //Use the find method on the data model to search DB
            if (err) {
                throw err; // If we get an error then bail
            }
            // Use Express to send the JSON back to the client in the web response
            res.send(Accs);
        });

    });


    app.get('/api/towork/getall', function (req, res) {

        // ROUTE: GET a user's list of Accs
        Accs.find({}, function (err, Accs) { //Use the find method on the data model to search DB
            if (err) {
                throw err; // If we get an error then bail
            }
            // Use Express to send the JSON back to the client in the web response
            res.send(Accs);
        });

    });


    // ROUTE: GET a specific ToDo list item by it's record ID
    app.get('/api/todo/:id', function (req, res) {

        Accs.findById({_id: req.params.id}, function (err, todo) { //Use the findID method on the data model to search DB
            if (err) {
                throw err; // If we get an error then bail
            }
            // Use Express to send the JSON back to the client in the web response
            res.send(todo);
        });

    });

    // ROUTE: POST (create) a new Todo item to my list
    app.post('/api/accs', function (req, res) {
        const newAcc =
            Accs({
                userName: req.body.UserName,
                userPassword: req.body.UserPassword,
                userBalance: req.body.UserBalance
            });
        console.log("Check put endpoint");
        console.log("name: " + req.body.UserName + " pass: " + req.body.UserPassword + " balance: " + req.body.UserBalance);
        newAcc.save(function (reyError) {
            if (reyError) {
                throw reyError; // If we get an error then bail
            }
            // Use Express to send a simple SUCCESS message
            res.json({result: 'Ok'});
        });

    });

    // ROUTE: UPDATE and existing item
    app.put('/api/todo', function (req, res) {

        Accs.findOneAndUpdate(req.body.id, {
            todo: req.body.todo,
            isDone: req.body.isDone,
          //  hasAttachment: req.body.hasAttachment
        }, function (err, todo) {
            if (err) {
                throw err; // If we get an error then bail
            }
            // Use Express to send a simple SUCCESS message
            res.json({result: 'OK'});
        });
    });

    // ROUTE: DELETE an existing todo item by its ID
    app.delete('/api/todo', function (req, res) {

        //console.log(req.body);
        Accs.findByIdAndRemove(req.body.id, function (err) {
            if (err) {
                throw err; // If we get an error then bail
            }
            // Use Express to send a simple SUCCESS message
            res.json({result: 'OK'});
        })

    });

};