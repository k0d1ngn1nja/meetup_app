let express = require('express');
let router = express.Router();
let noteCtrl = require('../controllers/note.Ctrl');

router.get('/', (req, res) => {
	res.render('index');
});

router.get('/newnote', noteCtrl.allUsersNotes);


module.exports = router;