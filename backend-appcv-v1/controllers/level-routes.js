'use strict';

const express = require('express');
const router = express.Router();
const model = require('../models');
const {v4 : uuidv4} = require('uuid');

// GET Level listing.
router.get('/', async function(req, res, next) {
    try {
        const Level = await model.Level.findAll({});
        if (Level.length !== 0) {
        res.json({
            'status': 'OK',
            'messages': '',
            'data': Level
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
// GET Level by Level
router.get('/:nameLevel', async function(req, res, next) {
    try {
        const nameLevel = req.params.nameLevel;
        const Level = await model.Level.findAll({where: {nameLevel: nameLevel}});
        if (Level.length !== 0) {
        res.json({
            'status': 'OK',
            'messages': '',
            'data': Level
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
// POST Level
router.post('/add', async function(req, res, next) {
    try {
        var str1 = 'LEV-';
        const {nameLevel} = req.body;
        const idLevel = str1.concat(uuidv4());
        const Level = await model.Level.create({
        idLevel,
        nameLevel
        });
        if (Level) {
            res.status(201).json({
            'status': 'OK',
            'messages': 'Level data added successfully',
            'data': Level,
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
// UPDATE Level
router.patch('/update/:idLevel', async function(req, res, next) {
    try {
        const idLevel = req.params.idLevel;
        const {nameLevel} = req.body;
        const Level = await model.Level.update({
        nameLevel
        }, {
        where: {
            idLevel: idLevel
        }
        });
        if (Level) {
        res.json({
            'status': 'OK',
            'messages': 'Level data has been update successfully',
            'data': Level,
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
// DELETE Level
router.delete('/delete/:idLevel', async function(req, res, next) {
    try {
        const idLevel = req.params.idLevel;
        const Level = await model.Level.destroy({ where: {
        idLevel: idLevel
        }})
        if (Level) {
        res.json({
            'status': 'OK',
            'messages': 'Level data has been deleted successfully',
            'data': Level,
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