const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { getAllItems, notifyUser } = require('../controllers/adminController');

router.get('/items', auth, getAllItems);
router.post('/notify/:id', auth, notifyUser);

module.exports = router;
