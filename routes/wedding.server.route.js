// ./jason-lisa-wedding-website/routes/wedding.server.route.js
// import express from 'express';
const express = require("express");

//import controller file
// import * as guestController from '../controllers/wedding.server.controller';
const guestController = require("../controllers/wedding.server.controller");

// get an instance of express router
const router = express.Router();

router.route('/')
    .get(guestController.getGuests)
    .post(guestController.findGuestByName);

// router.route('/:id')
//     .get(guestController.getGuest)
//     .delete(guestController.deleteGuest);

// export default router
module.exports = router;