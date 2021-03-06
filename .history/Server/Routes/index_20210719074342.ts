/**
 * Module dependencies.
 *  File name: index.ts, 
    Author's name: Ofovwe Ewere
    Student's id: 301188196
    Web App name: The Favorite Tournament List App
    Date: June 25, 2021
 */
// modules required for routing
import express from 'express';
const router = express.Router();
export default router;

import mongoose from 'mongoose';

// define the tournament model
import tournament from '../Models/tournaments';

/* GET home page. wildcard */
router.get('/', (req, res, next) => {
  res.render('content/index', {
    title: 'Home',
    page: '',
    tournaments: 'tournaments[0]'
   });
});

//module.exports = router;
