const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const Review = require('../../models/Reviews');

router.get('/trails/:trail_id', (req,res)=>{
    Review.find({trail: req.params.trail_id})
        .sort({date: -1})
        .then(reviews => res.json(reviews))
        .catch(err => 
            res.status(404).json({trailnotfound: 'No trail found with that ID'}
            )
        );
});

router.get('/user/:user_id', (req,res)=>{
    Review.find({user: req.params.user_id})
        .sort({date: -1})
        .then(reviews => res.json(reviews))
        .catch(err => 
            res.status(404).json({reviewnotfound: 'No review found for that user.'}
        )
    );
});

router.get('/:reviewId', (req,res)=>{
    Review.findById(req.params.reviewId)
        .then(review => res.json(review))
        .catch(err=>
            res.status(404).json({noreviewfound: 'No review found'}
        )
    );
});

router.post('/', 
    passport.authenticate('jwt', {session: false}),
    (req,res)=> {
        const newReview = new Review({
            author: req.user.id,
            trail: req.trail.id,
            title: req.body.title, 
            body: req.body.body,
            rating:req.body.rating,
            images: req.body.images
        });

        newReview.save().then(review => res.json(review), errors => res.json('Could not create Review') 
        );
    });

    router.patch('/:reviewId', passport.authenticate('jwt', {session:false}), (req,res)=>{
        Review.findById(req.params.reviewId, function(err, review){
            if(!review){
                return res.status(400).json('We could not find that review');
            }else if (review.author != req.user.id){
                return res.status(400).json('Wrong User');
            }else{
                Review.findOneAndUpdate({ _id: req.params.reviewId}, req.body, function(err, review){
                    if(err){
                        return res.status(400).json(err);
                    }else{
                        newReview = req.body;
                        res.send(newReview);
                    }

                });
            }
        });
    });

    router.delete('/:reviewId', passport.authenticate('jwt', {session:false}), (req, res)=>{
        Review.findById(req.params.reviewId, function(err, review){
            if (!review){
                return res.status(400).json('We could not find that review');
            }else if (review.author != req.user.id){
                return res.status(400).json('Invalid Credentials');
            }else {
                Review.findOneAndDelete({_id: req.params.reviewId}, function (err,review){
                    if (err){
                        return res.status(400).json(err);
                    }else{
                        res.send(review.id);
                    }
                });
            }
        });
    });

    module.exports = router;