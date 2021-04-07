'use strict';

const express = require('express');
const router = express.Router();
const model = require('../models');
const {v4 : uuidv4} = require('uuid');

// GET Health listing.
router.get('/', async function(req, res, next) {
    try {
        const Health = await model.Health.findAll({});
        if (Health.length !== 0) {
        res.json({
            'status': 'OK',
            'messages': '',
            'data': Health
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
// GET Health by nameHealth
router.get('/:nameHealth', async function(req, res, next) {
    try {
        const nameHealth = req.params.nameHealth;
        const Health = await model.Health.findAll({where: {nameHealth: nameHealth}});
        if (Health.length !== 0) {
        res.json({
            'status': 'OK',
            'messages': '',
            'data': Health
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
// POST Health
router.post('/add', async function(req, res, next) {
    try {
        var str1 = 'HEA-';
        const {nameHealth} = req.body;
        const idHealth = str1.concat(uuidv4());
        const Health = await model.Health.create({
        idHealth,
        nameHealth
        });
        if (Health) {
            res.status(201).json({
            'status': 'OK',
            'messages': 'Health data added successfully',
            'data': Health,
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
// UPDATE Health
router.patch('/update/:idHealth', async function(req, res, next) {
    try {
        const idHealth = req.params.idHealth;
        const {nameHealth} = req.body;
        const Health = await model.Health.update({
        nameHealth
        }, {
        where: {
            idHealth: idHealth
        }
        });
        if (Health) {
        res.json({
            'status': 'OK',
            'messages': 'Health data has been update successfully',
            'data': Health,
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
// DELETE Health
router.delete('/delete/:idHealth', async function(req, res, next) {
    try {
        const idHealth = req.params.idHealth;
        const Health = await model.Health.destroy({ where: {
        idHealth: idHealth
        }})
        if (Health) {
        res.json({
            'status': 'OK',
            'messages': 'Health data has been deleted successfully',
            'data': Health,
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