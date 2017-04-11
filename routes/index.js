let express = require('express');
let router = express.Router();
let noteCtrl = require('../controllers/note.Ctrl');
let asyncCtrl = require('../controllers/async.Ctrl');

router.get('/', asyncCtrl.homePage);
router.post('/', noteCtrl.noteByMember);

router.get('/newnote', noteCtrl.allUsersNotes);
router.post('/newnote', noteCtrl.createNote);

module.exports = router;