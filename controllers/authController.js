const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Register new user
exports.register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    
    if (!req.file) {
      return res.render('register', { message: 'Profile picture is required' });
    }

    // Check if user exists
    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
      return res.render('register', { message: 'User already exists' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = new User({
      username,
      email,
      password: hashedPassword,
      profilePic: req.file.filename
    });

    await user.save();
    res.redirect('/login'); // Fixed: was '/auth/login'
    
  } catch (error) {
    console.error(error);
    res.render('register', { message: 'Registration failed' });
  }
};

// Login user
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user
    const user = await User.findOne({ email });
    if (!user) {
      return res.render('login', { message: 'Invalid credentials' });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.render('login', { message: 'Invalid credentials' });
    }

    // Create token
    const token = jwt.sign({ id: user._id, username: user.username }, process.env.JWT_SECRET);

    // Set cookie
    res.cookie('token', token, { httpOnly: true });
    res.redirect('/posts/dashboard');
    
  } catch (error) {
    console.error(error);
    res.render('login', { message: 'Login failed' });
  }
};

// Logout user
exports.logout = (req, res) => {
  res.clearCookie('token');
  res.redirect('/login'); 
  
};