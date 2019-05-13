// ./jason-and-lisa-wedding-website/controllers/wedding.server.controller.js
const mongoose = require('mongoose');

//import models
const Guest = require('../models/wedding.server.model');
const flattenDiagnosticMessageText = require('typescript').flattenDiagnosticMessageText;
const createNoSubstitutionTemplateLiteral = require('typescript').createNoSubstitutionTemplateLiteral;

module.exports = {
  getGuests: (req, res) => {
    Guest.find().exec((err,guests) => {
      if(err){
        return res.json({'success':false,'message': err});
      }
  
      return res.json({'success':true,'message':'Guests fetched successfully',guests});
    });
  },

  findGuestByName: (req, res) => {
    console.log(req);
    Guest.find({firstName: req.body.firstName, lastName: req.body.firstName},(err, guest, _id) => {
      if(err){
        console.log(err);
        return res.json({'success': false, 'message': err});
      } else {
        console.log(req.body);
      }
  
      return res.json({'success': true, 'message': req.body.firstName + ' fetched successfully', guest, _id});
    })
  }
}

// export const getGuests = (req,res) => {
//   Guest.find().exec((err,guests) => {
//     if(err){
//     return res.json({'success':false,'message': err});
//     }

//     return res.json({'success':true,'message':'Guests fetched successfully',guests});
//   });
// }

// export const findGuestByName = (req, res) => {
//   Guest.find({firstName: req.body.firstName, lastName: req.body.firstName},(err, guest, _id) => {
//     if(err){
//       console.log(err);
//       return res.json({'success': false, 'message': err});
//     } else {
//       console.log(req.body);
//     }

//     return res.json({'success': true, 'message': req.body.firstName + ' fetched successfully', guest, _id});
//   })
// }

// export const addGuest = (req,res) => {
//   // console.log(req.body);
//   const newGuest = new Guest(req.body);
//   newGuest.save((err, guest) => {
//     if(err){
//     return res.json({'success':false,'message': err});
//     }

//     return res.json({'success':true,'message':'Guest added successfully', guest});
//   })
// }

// export const updateGuest = (req,res) => {
//   Guest.findOneAndUpdate({ _id:req.body.id }, req.body, { new:true }, (err,guest) => {
//     if(err){
//     return res.json({'success':false,'message': err,'error':err});
//     }
//     return res.json({'success':true,'message':'Guest Updated Successfully', guest});
//   })
// }

// export const deleteGuest = (req,res) => {
//   Guest.findByIdAndRemove(req.params.id, (err,guest) => {
//     if(err){
//     return res.json({'success':false,'message':'Some Error'});
//     }

//     return res.json({'success':true,'message':'Guest Deleted Successfully',guest});
//   })
// }