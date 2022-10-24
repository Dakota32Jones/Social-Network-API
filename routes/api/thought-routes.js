const router = require("express").Router();

const {
  getAllThoughts,
  getThoughtById,
  addThought,
  updateThought,
  addReaction,
  removeReaction,
  removeThought,
} = require("../../controllers/thought-controller");

// route to the root page of just a / and get all thoughts
router.route("/").get(getAllThoughts);

// route to userId and post a thought from that user
router.route("/:userId").post(addThought);
// route by the thought ID and get the thought and add the thought or delete the thought
router
  .route("/:thoughtId")
  .get(getThoughtById)
  .put(updateThought)
  .delete(removeThought);

router
  // /api/thoughts/:thoughtId/reactions
  .route("/:thoughtId/reactions/:reactionId")
  .post(addReaction)
  .delete(removeReaction);

module.exports = router;
