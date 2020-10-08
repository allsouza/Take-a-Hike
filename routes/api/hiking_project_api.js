const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Trails = require('../../models/Trails');
const keys = require('../../config/keys');
const axios = require('axios');

router.get('/', (req, res) => {
    const {lat=35.415972, lon=-85.453624, maxResult =10, maxLength} = req.body;
    const path = `https://www.hikingproject.com/data/get-trails?key=${keys.hikingProjectKey}&lat=${lat}&lon=${lon}&maxResult=${maxResult}&maxLength=${maxLength}`;
    const response = {};
    axios.get(path).then(result => {
        if(result.data.success === 1){
            Array.from(result.data.trails).forEach(trail => {
                console.log(trail)
                Trails.exists({trail_id: trail.id}, function(err, result){
                    if(!result){
                        const newTrail = new Trails({
                            trail_id: trail.id,
                            name: trail.name,
                            summary: trail.summary,
                            difficulty: trail.difficulty,
                            image: trail.imgMedium,
                            location: trail.location,
                            length: trail.length,
                            ascent: trail.ascent,
                            descent: trail.descent,
                            high: trail.high,
                            longitude: trail.longitude,
                            latitude: trail.latitude
                        })
                        newTrail.save().then(trail => {
                            response[trail._id] = trail;
                        })
                    }
                })
            })
        }
        setTimeout(()=>res.json(response), (100*maxResult)); // Waiting 100 milliseconds per trail for async tasks to finish
    })
})

module.exports = router;