let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let memberNameValidator = [
	(value) => {
		return (value.length > 0 && value != '(Select Name)');
	},
	// custom error text
	'Select a valid member name.'
]

let NoteSchema = new Schema({
	memberName: {
		type: String,
		validate: memberNameValidator
	},
	project: {
		type: String,
		required: true
	},
	workYesterday: {
		type: String,
		required: true
	},
	workToday: {
		type: String,
		required: true
	},
	impediment: {
		type: String,
		required: true,
		default: 'none'
	},
	createdOn: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model('Note', NoteSchema);