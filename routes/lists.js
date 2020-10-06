const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const List = require('../../models/Lists');
validateListInput = require('../../validation/lists');

router.get('/', (req,res)=>{
    List.find()
        .sort({timestamp:-1})
        .then(lists => res.json(lists))
        .catch(err => res.status(404).json({nolistsfound: 'No lists found, create some!'}));

});

router.get('/user/:user_id', (req,res)=>{
    List.find({user: req.params.user_id})
        .sort({timestamps: -1})
        .then(lists => res.json(lists))
        .catch(err => 
            res.status(404).json({listnotfound: 'No lists from that user were found'}
        )
    );
});

router.get('/:listId', (req,res)=> {
    List.findById(req.params.id)
        .then(list => res.json(list))
        .catch(err => 
            res.status(404).json({nolistfound: 'No list found with that id'})
            );
});

router.post('/', 
    passport.authenticate('jwt', {session:false}),
    (req,res)=>{
        const{errors, isValid} = validateListInput(req.body);

        if (!isValid) {
            return res.status(400).json(errors);
        }

        const newList = new List({
            title: req.body.title,
            author: req.user.id
        });

        newList.save().then(list => res.json(list));
    });

router.patch('/:listId', passport.authenticate('jwt', {session:false}), async (req,res)=>{
    List.findById(req.params.listId, function(err, list){
        if (!list){
            return res.status(400).json('We could not find that list');
        }else if (list.author != req.user.id){
            return res.status(400).json('Invalid Credentials');
        }else{
            List.findOneAndUpdate({_id: req.params.listId}, req.body, function(err, list){
                if (err) {
                    return res.status(400).json(err);
                }else {
                    res.send(list);
                }
            });
        }
    });
});

router.delete('/:listId', passport.authenticate('jwt', {session:false}), (req,res)=>{
   List.findById(req.params.listId, function(err, list){
       if(!list){
           return res.status(400).json('We could not find that list');
       } else if (list.author != req.user.id){
           return res.status(400).json('Invalid Credentials');
       } else{
           List.findOneAndDelete({_id: req.params.listId}, function (err, list){
               if (err){
                   return res.status(400).json(err);
               }else{
                   res.send('Deleted!');
               }

           });
       }
   });
});

module.exports = router;