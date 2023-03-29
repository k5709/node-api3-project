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
      res.status(404).json({ message: "no such user" });
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

function validateUser(req, res, next) {
  // DO YOUR
  console.log("test2");
  next();
}

function validatePost(req, res, next) {
  // DO YOUR
  console.log("test");
  next();
}

// do not forget to expose these functions to other modules
module.exports = {
  logger,
  validateUserId,
  validateUser,
  validatePost,
};
