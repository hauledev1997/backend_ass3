const express = require('express');

const router = express.Router();

const adminController = require('../controller/admin');
const isAuth = require('../middlewares/is-auth');

router.post('/signup', adminController.postAdminSignup);

router.post('/signin', adminController.postAdminSignin);

router.get('/products', isAuth, adminController.getProducts);

router.post('/search', isAuth, adminController.postSearchProducts);

router.get('/chatrooms', adminController.getAllChatRooms);

router.get('/chatrooms/getById', adminController.getChatRoomById);

router.get('/clients', adminController.getClients);

router.get('/orders', adminController.getOrders);

router.post('/new-product', isAuth, adminController.postNewProduct);

router.post('/delete-product', isAuth, adminController.postDeleteProduct);

router.get('/edit-product/:prodId', isAuth, adminController.getEditProduct);

router.post('/edit-product/:prodId', isAuth, adminController.postEditProduct);

module.exports = router;
