let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let NoteSchema = new Schema({
	memberName: {
		type: String
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

model.exports = mongoose.model('Note', NoteSchema);