const router = require('express').Router();
const thoughtRoutes = {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
} = require('../../controllers/thoughtController.js');


router.route('/').get(getThoughts).post(createThought);

router
.route('/:thoughtId')
.get(getSingleThought)
.put(updateThought)
.delete(deleteThought);

router
  .route('/:thoughtId/reactions')
  .post(createReaction);

router
.route('/:thoughtId/reactions/:reactionId')
.delete(deleteReaction);

module.exports = router;
module.exports = thoughtRoutes;

