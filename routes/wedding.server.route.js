// ./jason-lisa-wedding-website/routes/wedding.server.route.js
import express from 'express';

//import controller file
import * as guestController from '../controllers/wedding.server.controller';

// get an instance of express router
const router = express.Router();

router.route('/')
    .get(guestController.getGuests)
    .post(guestController.addGuest)
    .put(guestController.updateGuest);

// router.route('/:id')
//     .get(guestController.getGuest)
//     .delete(guestController.deleteGuest);

export default router;