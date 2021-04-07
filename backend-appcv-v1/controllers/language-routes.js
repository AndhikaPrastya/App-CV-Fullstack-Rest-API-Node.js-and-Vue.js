'use strict';

const express = require('express');
const router = express.Router();
const model = require('../models');
const {v4 : uuidv4} = require('uuid');

// GET Language listing.
router.get('/', async function(req, res, next) {
    try {
        const Language = await model.Language.findAll({});
        if (Language.length !== 0) {
        res.json({
            'status': 'OK',
            'messages': '',
            'data': Language
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
// GET Language by language
router.get('/:language', async function(req, res, next) {
    try {
        const language = req.params.language;
        const Language = await model.Language.findAll({where: {language: language}});
        if (Language.length !== 0) {
        res.json({
            'status': 'OK',
            'messages': '',
            'data': Language
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
// POST Language
router.post('/add', async function(req, res, next) {
    try {
        var str1 = 'LAN-';
        const {language} = req.body;
        const idLanguage = str1.concat(uuidv4());
        const Language = await model.Language.create({
        idLanguage,
        language
        });
        if (Language) {
            res.status(201).json({
            'status': 'OK',
            'messages': 'Language data added successfully',
            'data': Language,
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
// UPDATE Language
router.patch('/update/:idLanguage', async function(req, res, next) {
    try {
        const idLanguage = req.params.idLanguage;
        const {language} = req.body;
        const Language = await model.Language.update({
        language
        }, {
        where: {
            idLanguage: idLanguage
        }
        });
        if (Language) {
        res.json({
            'status': 'OK',
            'messages': 'Language data has been update successfully',
            'data': Language,
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
// DELETE Language
router.delete('/delete/:idLanguage', async function(req, res, next) {
    try {
        const idLanguage = req.params.idLanguage;
        const Language = await model.Language.destroy({ where: {
        idLanguage: idLanguage
        }})
        if (Language) {
        res.json({
            'status': 'OK',
            'messages': 'Language data has been deleted successfully',
            'data': Language,
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