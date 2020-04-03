const { Router } = require('express');
const {
  getNote,
  postNote,
  getViewNote,
  putNote,
  deleteNote
} = require('../controllers/notes.controllers');

const router = Router();

router.route('/')
  .get(getNote)
  .post(postNote)

router.route('/:id')
  .get(getViewNote)
  .put(putNote)
  .delete(deleteNote)

module.exports = router;