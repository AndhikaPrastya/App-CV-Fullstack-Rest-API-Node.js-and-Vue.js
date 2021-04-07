'use strict';

const express = require('express');
const router = express.Router();
const model = require('../models');
const {v4 : uuidv4} = require('uuid');

// GET Profile listing.
router.get('/', async function(req, res, next) {
    try {
        const Profile = await model.Profile.findAll({});
        if (Profile.length !== 0) {
        res.json({
            'status': 'OK',
            'messages': '',
            'data': Profile
        })
        } else {
        res.json({
            'status': 'ERROR',
            'messages': 'EMPTY',
            'data': {}
        })
        }
    } catch (err) {
        res.json({
        'status': 'ERROR',
        'messages': err.message,
        'data': {}
        })
    }
});
// GET Profile by Profile
router.get('/:idProfile', async function(req, res, next) {
    try {
        const idProfile = req.params.idProfile;
        const Profile = await model.Profile.findAll({where: {idProfile: idProfile}});
        if (Profile.length !== 0) {
        res.json({
            'status': 'OK',
            'messages': '',
            'data': Profile
        })
        } else {
        res.json({
            'status': 'ERROR',
            'messages': 'EMPTY',
            'data': {}
        })
        }
    } catch (err) {
        res.json({
        'status': 'ERROR',
        'messages': err.message,
        'data': {}
        })
    }
});
// POST Profile
router.post('/add', async function(req, res, next) {
    try {
        var str1 = 'PRO-';
        const {
            descProfile,
            idPerson
        } = req.body;
        const idProfile = str1.concat(uuidv4());
        const Profile = await model.Profile.create({
            idProfile,
            descProfile,
            idPerson
        });
        if (Profile) {
            res.status(201).json({
            'status': 'OK',
            'messages': 'Profile data added successfully',
            'data': Profile,
            })
        }
    } catch (err) {
    res.status(400).json({
        'status': 'ERROR',
        'messages': err.message,
        'data': {},
    })
    }
});
// UPDATE Profile
router.patch('/update/:idProfile', async function(req, res, next) {
    try {
        const idProfile = req.params.idProfile;
        const { 
            descProfile,
            idPerson
        } = req.body;
        const Profile = await model.Profile.update({
            descProfile,
            idPerson
        }, {
        where: {
            idProfile: idProfile
        }
        });
        if (Profile) {
        res.json({
            'status': 'OK',
            'messages': 'Profile data has been update successfully',
            'data': Profile,
        })
        }
    } catch (err) {
        res.status(400).json({
        'status': 'ERROR',
        'messages': err.message,
        'data': {},
        })
    }
});
// DELETE Profile
router.delete('/delete/:idProfile', async function(req, res, next) {
    try {
        const idProfile = req.params.idProfile;
        const Profile = await model.Profile.destroy({ where: {
        idProfile: idProfile
        }})
        if (Profile) {
        res.json({
            'status': 'OK',
            'messages': 'Profile data has been deleted successfully',
            'data': Profile,
        })
        }
    } catch (err) {
        res.status(400).json({
        'status': 'ERROR',
        'messages': err.message,
        'data': {},
        })
    }
});

module.exports = router;