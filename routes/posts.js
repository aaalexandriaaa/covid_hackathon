const router = require('express').Router();
const postsCtrl = require('../controllers/posts')

// Public Routes
router.get('/', postsCtrl.index);

// Protected Routes
router.use(require('../config/auth'));

function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({ msg: 'Not Authorized' });
}

module.exports = router;