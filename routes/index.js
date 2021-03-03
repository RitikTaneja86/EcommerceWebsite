const express = require('express');

const router = express.Router();

const homeController = require('../controllers/home_controller');

console.log('router loaded');

router.get('/', homeController.home);

router.use('/contact', require('./contact'));
router.use('/products', require('./products'));
router.use('/vendor', require('./vendor'));
router.use('/member-profile', require('./member-profile'));
router.use('/shop', require('./shop'));
router.use('/single-product', require('./single-product'));
router.use('/admin-login', require('./admin-login'));
router.use('/signup', require('./signup'));

module.exports = router;