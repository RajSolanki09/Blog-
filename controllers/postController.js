
const Post = require('../models/Post');
const jwt = require('jsonwebtoken');

// Get user from token
const getUserFromToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET);
};

// Show dashboard
exports.dashboard = async (req, res) => {
  try {
    const token = req.cookies.token;
    const user = getUserFromToken(token);
    
    const posts = await Post.find({ user: user.id })
      .populate('user', 'username profilePic')
      .sort({ createdAt: -1 });
      
    res.render('dashboard', { posts, username: user.username });
    
  } catch (error) {
    console.error(error);
    res.redirect('/auth/login');
  }
};

// Create post
exports.createPost = async (req, res) => {
  try {
    const token = req.cookies.token;
    const user = getUserFromToken(token);
    const { title, content } = req.body;

    const post = new Post({
      title,
      content,
      user: user.id
    });

    await post.save();
    res.redirect('/posts/dashboard');
    
  } catch (error) {
    console.error(error);
    res.redirect('/posts/dashboard');
  }
};

// View single post
exports.viewPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
      .populate('user', 'username profilePic');
      
    if (!post) {
      return res.render('error', { message: 'Post not found' });
    }
    
    res.render('viewPost', { post });
    
  } catch (error) {
    console.error(error);
    res.render('error', { message: 'Error loading post' });
  }
};

// Show edit form
exports.editPostForm = async (req, res) => {
  try {
    const token = req.cookies.token;
    const user = getUserFromToken(token);
    
    const post = await Post.findById(req.params.id);
    
    if (!post) {
      return res.render('error', { message: 'Post not found' });
    }
    
    if (post.user.toString() !== user.id) {
      return res.render('error', { message: 'Not authorized' });
    }
    
    res.render('editPost', { post });
    
  } catch (error) {
    console.error(error);
    res.render('error', { message: 'Error loading edit form' });
  }
};

// Update post
exports.updatePost = async (req, res) => {
  try {
    const token = req.cookies.token;
    const user = getUserFromToken(token);
    const { title, content } = req.body;
    
    const post = await Post.findById(req.params.id);
    
    if (!post || post.user.toString() !== user.id) {
      return res.redirect('/posts/dashboard');
    }
    
    post.title = title;
    post.content = content;
    await post.save();
    
    res.redirect('/posts/dashboard');
    
  } catch (error) {
    console.error(error);
    res.redirect('/posts/dashboard');
  }
};

// Delete post
exports.deletePost = async (req, res) => {
  try {
    const token = req.cookies.token;
    const user = getUserFromToken(token);
    
    const post = await Post.findById(req.params.id);
    
    if (!post || post.user.toString() !== user.id) {
      return res.redirect('/posts/dashboard');
    }
    
    await Post.findByIdAndDelete(req.params.id);
    res.redirect('/posts/dashboard');
    
  } catch (error) {
    console.error(error);
    res.redirect('/posts/dashboard');
  }
};