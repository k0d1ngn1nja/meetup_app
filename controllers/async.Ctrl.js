'use strict';

let Note = require('../models/Note.model');
let User = require('../models/User.model');
const async = require('async');

exports.homePage = (req, res) => {
	// Gather all notes and all users
	async.parallel([
		(callback) => {
			let query = Note.find({});
			query.sort({
				createdOn: 'desc'
			}).limit(12).exec((err, notes) =>{
				callback(err, notes)
			});
		},
		
		(callback) => {
			let query = User.find({});
			query.sort({
				username: 1
			}).exec((err, notes) =>{
				callback(err, notes)
			});
		}
	], (err, results) => {
		if(err){
			console.log(err)
		} else {
			res.render('index', {
				notes: results[0],
				users: results[1],
				title: 'Home Page'
			});
		}
	});
};