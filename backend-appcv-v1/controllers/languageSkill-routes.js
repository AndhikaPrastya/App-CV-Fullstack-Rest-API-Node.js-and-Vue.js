'use strict';

const express = require('express');
const router = express.Router();
const model = require('../models');
const {v4 : uuidv4} = require('uuid');

// GET LanguageSkill listing.
router.get('/', async function(req, res, next) {
    try {
        const LanguageSkill = await model.LanguageSkill.findAll({});
        if (LanguageSkill.length !== 0) {
        res.json({
            'status': 'OK',
            'messages': '',
            'data': LanguageSkill
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
// GET LanguageSkill by LanguageSkill
router.get('/:idLanguageSkill', async function(req, res, next) {
    try {
        const idLanguageSkill = req.params.idLanguageSkill;
        const LanguageSkill = await model.LanguageSkill.findAll({where: {idLanguageSkill: idLanguageSkill}});
        if (LanguageSkill.length !== 0) {
        res.json({
            'status': 'OK',
            'messages': '',
            'data': LanguageSkill
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
// POST LanguageSkill
router.post('/add', async function(req, res, next) {
    try {
        var str1 = 'LAS-';
        const {
            idLanguage,
            idLevel,
            idPerson
        } = req.body;
        const idLanguageSkill = str1.concat(uuidv4());
        const LanguageSkill = await model.LanguageSkill.create({
            idLanguageSkill,
            idLanguage,
            idLevel,
            idPerson
        });
        if (LanguageSkill) {
            res.status(201).json({
            'status': 'OK',
            'messages': 'Language Skill data added successfully',
            'data': LanguageSkill,
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
// UPDATE LanguageSkill
router.patch('/update/:idLanguageSkill', async function(req, res, next) {
    try {
        const idLanguageSkill = req.params.idLanguageSkill;
        const { 
            idLanguage,
            idLevel,
            idPerson
        } = req.body;
        const LanguageSkill = await model.LanguageSkill.update({
            idLanguage,
            idLevel,
            idPerson
        }, {
        where: {
            idLanguageSkill: idLanguageSkill
        }
        });
        if (LanguageSkill) {
        res.json({
            'status': 'OK',
            'messages': 'Language Skill data has been update successfully',
            'data': LanguageSkill,
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
// DELETE LanguageSkill
router.delete('/delete/:idLanguageSkill', async function(req, res, next) {
    try {
        const idLanguageSkill = req.params.idLanguageSkill;
        const LanguageSkill = await model.LanguageSkill.destroy({ where: {
        idLanguageSkill: idLanguageSkill
        }})
        if (LanguageSkill) {
        res.json({
            'status': 'OK',
            'messages': 'Language Skill data has been deleted successfully',
            'data': LanguageSkill,
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