'use strict';

const express = require('express');
const router = express.Router();
const model = require('../models');
const {v4 : uuidv4} = require('uuid');

// GET Person listing.
router.get('/', async function(req, res, next) {
    try {
        const Person = await model.Person.findAll({});
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
// GET Person by idPerson
router.get('/:namePerson', async function(req, res, next) {
    try {
        const idPerson = req.params.idPerson;
        const Person = await model.Person.findAll({where: {idPerson: idPerson}});
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
// POST Person
router.post('/register', async function(req, res, next) {
    try {
        var str1 = 'PER-';
        const {
            namePerson,
            birthPlace,
            birthDate,
            idGendre,
            idHealth,
            idReligion,
            email,
            password
        } = req.body;
        const idPerson = str1.concat(uuidv4());
        const Person = await model.Person.create({
            idPerson,
            namePerson,
            birthPlace,
            birthDate,
            idGendre,
            idHealth,
            idReligion,
            email,
            password
        });
        if (Person) {
            res.status(201).json({
            'status': 'OK',
            'messages': 'Person data added successfully',
            'data': Person,
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
// UPDATE Person
router.patch('/update/:idPerson', async function(req, res, next) {
    try {
        const idPerson = req.params.idPerson;
        const {
            namePerson,
            birthPlace,
            birthDate,
            idGendre,
            idHealth,
            idReligion,
        } = req.body;
        const Person = await model.Person.update({
            namePerson,
            birthPlace,
            birthDate,
            idGendre,
            idHealth,
            idReligion
        }, {
        where: {
            idPerson: idPerson
        }
        });
        if (Person) {
        res.json({
            'status': 'OK',
            'messages': 'Person data has been update successfully',
            'data': Person,
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
// DELETE Person
router.delete('/delete/:idPerson', async function(req, res, next) {
    try {
        const idPerson = req.params.idPerson;
        const Person = await model.Person.destroy({ where: {
        idPerson: idPerson
        }})
        if (Person) {
        res.json({
            'status': 'OK',
            'messages': 'Person data has been deleted successfully',
            'data': Person,
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