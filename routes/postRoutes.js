
const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const requireAuth = require('../middleware/authMiddleware');

// All routes need authentication
router.use(requireAuth);

router.get('/dashboard', postController.dashboard);
router.post('/create', postController.createPost);
router.get('/:id', postController.viewPost);
router.get('/:id/edit', postController.editPostForm);
router.post('/:id/update', postController.updatePost);
router.post('/:id/delete', postController.deletePost);

module.exports = router;