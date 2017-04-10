let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let UserSchema = new Schema({
	username: String,
	password: String
});

UserSchema.pre('save', (next) => {
	// capitalize username
	this.username.charAt(0).toLocaleUpperCase() + this.username.slice(1);
	next()
});

module.exports = mongoose.model('User', UserSchema);