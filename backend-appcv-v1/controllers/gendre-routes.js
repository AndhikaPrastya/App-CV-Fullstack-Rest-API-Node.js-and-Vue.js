'use strict';

const express = require('express');
const router = express.Router();
const model = require('../models');
const {v4 : uuidv4} = require('uuid');

// GET Gendre listing.
router.get('/', async function(req, res, next) {
    try {
        const Gendre = await model.Gendre.findAll({});
        if (Gendre.length !== 0) {
        res.json({
            'status': 'OK',
            'messages': '',
            'data': Gendre
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
// GET Gendre by nameGendre
router.get('/:nameGendre', async function(req, res, next) {
    try {
        const nameGendre = req.params.nameGendre;
        const Gendre = await model.Gendre.findAll({where: {nameGendre: nameGendre}});
        if (Gendre.length !== 0) {
        res.json({
            'status': 'OK',
            'messages': '',
            'data': Gendre
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
// POST Gendre
router.post('/add', async function(req, res, next) {
    try {
        var str1 = 'GEN-';
        const {nameGendre} = req.body;
        const idGendre = str1.concat(uuidv4());
        const Gendre = await model.Gendre.create({
        idGendre,
        nameGendre
        });
        if (Gendre) {
            res.status(201).json({
            'status': 'OK',
            'messages': 'Gendre data added successfully',
            'data': Gendre,
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
// UPDATE Gendre
router.patch('/update/:idGendre', async function(req, res, next) {
    try {
        const idGendre = req.params.idGendre;
        const {nameGendre} = req.body;
        const Gendre = await model.Gendre.update({
        nameGendre
        }, {
        where: {
            idGendre: idGendre
        }
        });
        if (Gendre) {
        res.json({
            'status': 'OK',
            'messages': 'Gendre data has been update successfully',
            'data': Gendre,
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
// DELETE Gendre
router.delete('/delete/:idGendre', async function(req, res, next) {
    try {
        const idGendre = req.params.idGendre;
        const Gendre = await model.Gendre.destroy({ where: {
        idGendre: idGendre
        }})
        if (Gendre) {
        res.json({
            'status': 'OK',
            'messages': 'Gendre data has been deleted successfully',
            'data': Gendre,
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