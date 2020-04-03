const { Router } = require('express');
const { getProfilie, postProfile, deleteProfile} = require('../controllers/profile.controllers');

const router = Router();

router.route('/')
  .get(getProfilie)
  .post(postProfile)

router.route('/:id')
  .delete(deleteProfile)


module.exports = router;
