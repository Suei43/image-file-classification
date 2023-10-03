const Router = require("express").Router;

const userRouter = Router();

const {
  userLogin,
  userRegister,
  userUpdate,
  getUser,
  userGoogleLogin,
} = require("../controllers/userController");

const { authenticate } = require("../utils/authenticate");

userRouter.get("/user", authenticate, getUser);

userRouter.post("/login", userLogin);

userRouter.post("/newuser", userRegister);

userRouter.post("/google_login", userGoogleLogin);

userRouter.patch("/update", authenticate, userUpdate);

module.exports = userRouter;
