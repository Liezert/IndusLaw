const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const prisma = require('../prismaClient');

const SECRET = process.env.JWT_SECRET || 'secret';

router.post('/register', async (req, res) => {
  try {
    const { fullName, email, password } = req.body;
    
    // Check existing
    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) {
      return res.status(400).json({ error: 'Email already in use' });
    }
    
    // Hash
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // Create user
    const user = await prisma.user.create({
      data: {
        fullName,
        email,
        password: hashedPassword
      }
    });
    
    // Token
    const token = jwt.sign({ userId: user.id, email: user.email }, SECRET, { expiresIn: '7d' });
    res.json({ token, user: { id: user.id, fullName: user.fullName, email: user.email } });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }
    
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }
    
    const token = jwt.sign({ userId: user.id, email: user.email }, SECRET, { expiresIn: '7d' });
    res.json({ token, user: { id: user.id, fullName: user.fullName, email: user.email } });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

router.post('/logout', (req, res) => {
  res.json({ message: 'Logged out successfully' });
});

router.get('/me', async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ error: 'Unauthorized' });
    
    const decoded = jwt.verify(token, SECRET);
    const user = await prisma.user.findUnique({ where: { id: decoded.userId } });
    if (!user) return res.status(404).json({ error: 'User not found' });
    
    res.json({ user: { id: user.id, fullName: user.fullName, email: user.email } });
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
});

module.exports = router;
