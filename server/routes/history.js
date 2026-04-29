const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const prisma = require('../prismaClient');

const SECRET = process.env.JWT_SECRET || 'secret';

const authenticate = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ error: 'Unauthorized' });
    const decoded = jwt.verify(token, SECRET);
    req.userId = decoded.userId;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
};

router.get('/', authenticate, async (req, res) => {
  try {
    const history = await prisma.checkHistory.findMany({
      where: { userId: req.userId },
      orderBy: { createdAt: 'desc' }
    });
    
    // Parse the result string back to JSON for the client
    const formatted = history.map(h => ({
      ...h,
      result: JSON.parse(h.result)
    }));
    
    res.json(formatted);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Gagal mengambil history' });
  }
});

router.get('/:id', authenticate, async (req, res) => {
  try {
    const item = await prisma.checkHistory.findUnique({
      where: { id: req.params.id }
    });
    
    if (!item || item.userId !== req.userId) {
      return res.status(404).json({ error: 'Data tidak ditemukan' });
    }
    
    res.json({
      ...item,
      result: JSON.parse(item.result)
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

router.delete('/:id', authenticate, async (req, res) => {
  try {
    const item = await prisma.checkHistory.findUnique({
      where: { id: req.params.id }
    });
    
    if (!item || item.userId !== req.userId) {
      return res.status(404).json({ error: 'Data tidak ditemukan' });
    }
    
    await prisma.checkHistory.delete({
      where: { id: req.params.id }
    });
    
    res.json({ message: 'History dihapus' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
