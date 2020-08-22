const router = require("express").Router();
const {catchErrors} = require("../error handeler/err handler");
const userController = require("../controllers/userControllers");

router.post("/login", catchErrors(userController.login));
router.post("/register", catchErrors(userController.register));


module.exports = router;