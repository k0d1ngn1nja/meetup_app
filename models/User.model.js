let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let UserSchema = new Schema({
	username: String,
	password: String
});

model.exports = mongoose.model('User', UserSchema);