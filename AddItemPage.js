// routes/item.js
const express = require('express');
const jwt = require('jsonwebtoken');
const Item = require('../models/Item');
const User = require('../models/User');
const router = express.Router();
const multer = require('multer');
const path = require('path');

// JWT auth middleware
const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) return res.status(401).json({ message: 'No token' });
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your_jwt_secret');
    req.user = decoded;
    next();
  } catch {
    res.status(401).json({ message: 'Invalid token' });
  }
};

// Multer setup for file upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    cb(null, Date.now() + ext);
  }
});
const upload = multer({ storage });

// Add item (with image upload)
router.post('/add', authMiddleware, upload.single('image'), async (req, res) => {
  const { title, description, category, type, size, condition, tags } = req.body;
  const item = new Item({
    title,
    description,
    category,
    type,
    size,
    condition,
    tags: tags.split(',').map(tag => tag.trim()),
    image: req.file ? `uploads/${req.file.filename}` : '',
    uploader: req.user.id
  });
  await item.save();
  res.status(201).json({ message: 'Item added and pending approval' });
});

// Get all approved items
router.get('/', async (req, res) => {
  const items = await Item.find({ status: 'approved' });
  res.json(items);
});

// Get single item
router.get('/:id', async (req, res) => {
  const item = await Item.findById(req.params.id).populate('uploader', 'email');
  res.json(item);
});

module.exports = router;
