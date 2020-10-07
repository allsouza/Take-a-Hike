const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Trail = require('../../models/Trails');

router.get('/', (req,res)=>{
    Trail.find()
        .sort({id:-1})
        .then(trails => res.json(trails))
        .catch(err => res.status(404).json({notrailsfound: 'No Trails found!'}));
});

router.get('/:id', (req,res)=>{
    Trail.findById(req.params.id)
        .then(trail => res.json(trail))
        .catch(err => 
            res.status(404).json({notrailfound: 'No Trail found with that ID'}
        )
    );
});

router.post('/', 
    passport.authenticate('jwt', {session:false}),
    (req,res) => {
        const newTrail = new Trail({
            name: req.body.name, 
            summary: req.body.summary, 
            difficulty: req.body.difficulty,
            image: req.body.image,
            length: req.body.length, 
            ascent: req.body.ascent, 
            high: req.body.high, 
            longitude: req.body.longitude, 
            latitude: req.body.latitude
        });

        newTrail.save().then(trail => res.json(trail));
    });

    module.exports = router;
