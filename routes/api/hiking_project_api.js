const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Trails = require('../../models/Trails');
const keys = require('../../config/keys');
const axios = require('axios');

router.post('/', (req, res) => {
    const {lat=45.415972, lon=-120.453624, maxResult =10, maxLength} = req.body;
    const path = `https://www.hikingproject.com/data/get-trails?key=${keys.hikingProjectKey}&lat=${lat}&lon=${lon}&maxResult=${maxResult}&maxLength=${maxLength}`;
    const response = {};
    const promises = [];
    const saveNew = async function(trail){
        const exists = await Trails.exists({trail_id: trail.id});
        if(!exists){
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
                latitude: trail.latitude,
                url: trail.url
            })
            await newTrail.save().then(trail => {
                response[trail._id] = trail;
            })
        }
    }
    axios.get(path).then(async function(result){
        if(result.data.success === 1){
            Array.from(result.data.trails).forEach(function(trail){
                promises.push(saveNew(trail));
            })
            await Promise.all(promises).catch(() => console.log('error'))
        }
        res.json(response);
    }).catch((error) => console.log(error))
})

module.exports = router;