const express = require('express');
const multer = require('multer');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const validations = require('./validations');
const messageController = require('./index');

const upload = multer();
const router = express.Router();

router.get('/:roomId', auth(), messageController.getMessages);
router.post('/send-message', auth(), upload.none(), messageController.sendMessage);

module.exports = router;
