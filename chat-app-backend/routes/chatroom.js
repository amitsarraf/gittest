const router = require("express").Router();
const {catchErrors} = require("../error handeler/err handler");
const chatroomController = require("../controllers/chatroomController");
const auth = require("../middleware/auth");

router.post("/", auth, catchErrors(chatroomController.createChatroom));


module.exports = router;