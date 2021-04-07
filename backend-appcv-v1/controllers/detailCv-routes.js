'use strict';

const express = require('express');
const router = express.Router();
const model = require('../models');
const {v4 : uuidv4} = require('uuid');

// GET Person listing.
router.get('/', async function(req, res, next) {
    try {
        const Person = await model.Person.findAll({
            attributes: ['namePerson', 'birthPlace', 'birthDate'],
            include: [
                {model: model.Gendre, attributes: ['nameGendre']}, 
                {model: model.Health, attributes: ['nameHealth']}, 
                {model: model.Religion, attributes: ['nameReligion']},
                {model: model.LanguageSkill, attributes: ['idLanguageSkill'],
                    include: [
                        {model: model.Language, attributes: ['language']},
                        // {modul: model.Level, attributes: ['nameLevel']},
                    ]},
                {model: model.Objective, attributes: ['descObjective']},
                {model: model.Profile, attributes: ['descProfile']},
            ]
        });
        if (Person.length !== 0) {
        res.json({
            'status': 'OK',
            'messages': '',
            'data': Person
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
// GET Person by namePerson
// router.get('/:namePerson', async function(req, res, next) {
//     try {
//         const namePerson = req.params.namePerson;
//         const Person = await model.Person.findAll({where: {namePerson: namePerson}});
//         if (Person.length !== 0) {
//         res.json({
//             'status': 'OK',
//             'messages': '',
//             'data': Person
//         })
//         } else {
//         res.json({
//             'status': 'ERROR',
//             'messages': 'EMPTY',
//             'data': {}
//         })
//         }
//     } catch (err) {
//         res.json({
//         'status': 'ERROR',
//         'messages': err.message,
//         'data': {}
//         })
//     }
// });

module.exports = router;