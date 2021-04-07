'use strict';

const express = require('express');
const router = express.Router();
const model = require('../models');
const {v4 : uuidv4} = require('uuid');

// GET religion listing.
router.get('/', async function(req, res, next) {
    try {
        const Religion = await model.Religion.findAll({});
        if (Religion.length !== 0) {
        res.json({
            'status': 'OK',
            'messages': '',
            'data': Religion
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
// GET religion by nameReligion
router.get('/:nameReligion', async function(req, res, next) {
    try {
        const nameReligion = req.params.nameReligion;
        const Religion = await model.Religion.findAll({where: {nameReligion: nameReligion}});
        if (Religion.length !== 0) {
        res.json({
            'status': 'OK',
            'messages': '',
            'data': Religion
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
// POST Religion
router.post('/add', async function(req, res, next) {
    try {
        var str1 = 'REL-';
        const {nameReligion} = req.body;
        const idReligion = str1.concat(uuidv4());
        const Religion = await model.Religion.create({
        idReligion,
        nameReligion
        });
        if (Religion) {
            res.status(201).json({
            'status': 'OK',
            'messages': 'Religion data added successfully',
            'data': Religion,
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
// UPDATE Religion
router.patch('/update/:idReligion', async function(req, res, next) {
    try {
        const idReligion = req.params.idReligion;
        const {nameReligion} = req.body;
        const Religion = await model.Religion.update({
        nameReligion
        }, {
        where: {
            idReligion: idReligion
        }
        });
        if (Religion) {
        res.json({
            'status': 'OK',
            'messages': 'Releigion data has been update successfully',
            'data': Religion,
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
// DELETE Religion
router.delete('/delete/:idReligion', async function(req, res, next) {
    try {
        const idReligion = req.params.idReligion;
        const Religion = await model.Religion.destroy({ where: {
        idReligion: idReligion
        }})
        if (Religion) {
        res.json({
            'status': 'OK',
            'messages': 'Religion data has been deleted successfully',
            'data': Religion,
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