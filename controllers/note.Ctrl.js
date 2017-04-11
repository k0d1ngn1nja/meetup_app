'use strict';

let Note = require('../models/Note.model');
let User = require('../models/User.model');

exports.allUsersNotes = (req, res) => {
	// find all users
	User.find({}).sort({username: 1}).exec((err, users) => {
		if(err){
			console.log('Error getting users');
		} else {
			return res.render('newnote', {title: 'New Note', users: users});
		}
	});
}

exports.createNote = (req, res) => {
	// creating new note
	let newNote = new Note();

	newNote.memberName = req.body.memberName;
	newNote.project = req.body.project;
	newNote.workYesterday = req.body.workYesterday;
	newNote.workToday = req.body.workToday;
	newNote.impediment = req.body.impediment;

	newNote.save((err) => {
		if(err){
			let errMsg = "Sorry, an error occured while saving:" + err;
			res.render('newnote', {title: 'Note - new note(error)', mage: errMsg});
		} else {
			console.log('Meeting note has been saved');
			res.redirect(301, '/');
		}
	});
}

// filter by name
exports.noteByMember = (req, res) => {
	let query = Note.find({});
	let filterQuery = req.body.memberName;

	if(filterQuery.length === 0) {
		console.log("No notes found");
	} else {
		query.where({
			memberName: filterQuery
		})
		.sort({createdOn: 'desc'})
		.exec((err, results) => { 
			res.render('index', {notes: results, title: 'Filtered Results'});
		});
	}
}