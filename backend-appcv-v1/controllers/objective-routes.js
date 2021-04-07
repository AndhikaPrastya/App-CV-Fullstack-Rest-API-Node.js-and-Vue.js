'use strict';

const express = require('express');
const router = express.Router();
const model = require('../models');
const {v4 : uuidv4} = require('uuid');

// GET Objective listing.
router.get('/', async function(req, res, next) {
    try {
        const Objective = await model.Objective.findAll({});
        if (Objective.length !== 0) {
        res.json({
            'status': 'OK',
            'messages': '',
            'data': Objective
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
// GET Objective by Objective
router.get('/:idObjective', async function(req, res, next) {
    try {
        const idObjective = req.params.idObjective;
        const Objective = await model.Objective.findAll({where: {idObjective: idObjective}});
        if (Objective.length !== 0) {
        res.json({
            'status': 'OK',
            'messages': '',
            'data': Objective
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
// POST Objective
router.post('/add', async function(req, res, next) {
    try {
        var str1 = 'OBJ-';
        const {
            descObjective,
            idPerson
        } = req.body;
        const idObjective = str1.concat(uuidv4());
        const Objective = await model.Objective.create({
            idObjective,
            descObjective,
            idPerson
        });
        if (Objective) {
            res.status(201).json({
            'status': 'OK',
            'messages': 'Objective data added successfully',
            'data': Objective,
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
// UPDATE Objective
router.patch('/update/:idObjective', async function(req, res, next) {
    try {
        const idObjective = req.params.idObjective;
        const { 
            descObjective,
            idPerson
        } = req.body;
        const Objective = await model.Objective.update({
            descObjective,
            idPerson
        }, {
        where: {
            idObjective: idObjective
        }
        });
        if (Objective) {
        res.json({
            'status': 'OK',
            'messages': 'Objective data has been update successfully',
            'data': Objective,
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
// DELETE Objective
router.delete('/delete/:idObjective', async function(req, res, next) {
    try {
        const idObjective = req.params.idObjective;
        const Objective = await model.Objective.destroy({ where: {
        idObjective: idObjective
        }})
        if (Objective) {
        res.json({
            'status': 'OK',
            'messages': 'Objective data has been deleted successfully',
            'data': Objective,
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