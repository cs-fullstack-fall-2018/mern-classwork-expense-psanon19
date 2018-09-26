// We first need to load our mongoose data model
const Accs = require('../models/kingdomBankModel');

module.exports = function(app) {
    // Add an API endpoint with some dummy data
   app.get('/api/setupAccs', function(req, res) {
       
       // seed database
       const starterAccs = [
           {
               userName: "Sora",
               userPassword: "Sora123",
               userBalance: 1000000000000
           },
           {
               userName: "Riku",
               userPassword: "EdgeLord",
               userBalance: 10000000000
           },
           {
               userName: "Goofy",
               userPassword: "Yaaah-hoo-hoo-hoo-hooey",
               userBalance: 0
           }
       ];

       // Use the mongo method create to create records fopr the test data. err will hold any errors after create
       // and results will show records created.
       Accs.create(starterAccs, function(err, results) {
           // Lets us confirm that the seed data added via mongoose without any errors
           res.send(results);
       }); 
   });
    
};