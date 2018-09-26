const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);

const Schema = mongoose.Schema;

// Create Schema
const BankSchema = new Schema({
    userName: String,
    userPassword: String,
    userBalance: Number
});

const Accs = mongoose.model('Accs', BankSchema);

module.exports = Accs;