const express = require('express');
const router = express.Router();
const multer = require('multer');
const auth = require('../middleware/auth');
const { reportItem, getMyItems, updateStatus } = require('../controllers/itemController');

const upload = multer({ dest: 'uploads/' });

router.post('/report', auth, upload.single('image'), reportItem);
router.get('/my', auth, getMyItems);
router.patch('/status/:id', auth, updateStatus);

module.exports = router;
