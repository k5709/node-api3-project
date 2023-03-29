const express = require("express");
const {
  validateUserId,
  validateUser,
  validatePost,
} = require("../middleware/middleware");
const Users = require("./users-model");
const Posts = require("../posts/posts-model");
// You will need `users-model.js` and `posts-model.js` both
// The middleware functions also need to be required

const router = express.Router();

router.get("/", validateUser, (req, res) => {
  // RETURN AN ARRAY WITH ALL THE USERS
});

router.get("/:id", validateUserId, (req, res) => {
  // RETURN THE USER OBJECT
  // this needs a middleware to verify user id
  console.log(req.user);
  return res.json(req.user);
});

router.post("/", validateUser, validatePost, (req, res) => {
  // RETURN THE NEWLY CREATED USER OBJECT
  // this needs a middleware to check that the request body is valid
});

router.put("/:id", validateUserId, validateUser, (req, res) => {
  // RETURN THE FRESHLY UPDATED USER OBJECT
  // this needs a middleware to verify user id
  // and another middleware to check that the request body is valid
  console.log(req.user);
});

router.delete("/:id", validateUserId, (req, res) => {
  // RETURN THE FRESHLY DELETED USER OBJECT
  // this needs a middleware to verify user id
  console.log(req.user);
});

router.get("/:id/posts", validateUserId, (req, res) => {
  // RETURN THE ARRAY OF USER POSTS
  // this needs a middleware to verify user id
  console.log(req.user);
});

router.post(
  "/:id/posts",
  validateUserId,
  validateUser,
  validatePost,
  (req, res) => {
    // RETURN THE NEWLY CREATED USER POST
    // this needs a middleware to verify user id
    // and another middleware to check that the request body is valid
    console.log(req.user);
  }
);

// do not forget to export the router
module.exports = router;
