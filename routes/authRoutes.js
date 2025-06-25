const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const upload = require('../middleware/uploadMiddleware');

// Routes
router.get('/register', (req, res) => {
  res.render('register', { message: null });
});

router.post('/register', upload.single('profilePic'), authController.register);

router.get('/login', (req, res) => {
  res.render('login', { message: null });
});

router.post('/login', authController.login);

// Support both GET and POST for logout
router.get('/logout', authController.logout);
router.post('/logout', authController.logout);

module.exports = router;