const express = require("express");
const { check } = require("express-validator");

const usersController = require("../controllers/users-controllers");
const fileUpload = require("../middleware/file-upload");

const {
  googleAuthModule,
  // facebookAuthModule,
} = require("./../controllers/googleAuthController");

const router = express.Router();

router.get("/", usersController.getUsers);

router.post(
  "/signup",
  fileUpload.single("image"),
  [
    check("name").not().isEmpty(),
    check("email").normalizeEmail().isEmail(),
    check("password").isLength({ min: 6 }),
  ],
  usersController.signup
);
router.post("/login", usersController.login);

//google auth routes
router.get("/google/login", googleAuthModule.googleLoginAuth);
router.get(
  "/google/login/callback",
  googleAuthModule.googleCallbackAuth,
  googleAuthModule.googleCallbackLoggedIn
);
router.get("/google/logout", googleAuthModule.googleLogout);

module.exports = router;
