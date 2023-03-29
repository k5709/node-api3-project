const User = require("../users/users-model");

function logger(req, res, next) {
  // DO YOUR
  const timestamp = new Date().toLocaleDateString;
  const method = req.method;
  const url = req.originalUrl;
  console.log(`[${timestamp}] ${method} to ${url}`);
  next();
}

async function validateUserId(req, res, next) {
  try {
    const user = await User.getById(req.params.id);
    if (!user) {
      res.status(404).json({ message: "user not found " });
    } else {
      req.user = user;
      next();
    }
  } catch (error) {
    //later
    res.status(500).json({
      message: "problem finding user",
    });
  }
}

async function validateUser(req, res, next) {
  // DO YOUR
  try {
    const { name } = req.body;
    if (!name) {
      res.status(400).json({ message: "missing required name field" });
    } else {
      //later
      req.body = name;
      next();
    }
  } catch (err) {
    //later
    res.status(500).json({ message: "problem finding user" });
  }
}

async function validatePost(req, res, next) {
  try {
    const { text } = req.body;
    if (!text) {
      res.status(400).json({ message: "missing required text field" });
    } else {
      next();
    }
  } catch (error) {
    console.log(error.message);
  }
}

// do not forget to expose these functions to other modules
module.exports = {
  logger,
  validateUserId,
  validateUser,
  validatePost,
};
