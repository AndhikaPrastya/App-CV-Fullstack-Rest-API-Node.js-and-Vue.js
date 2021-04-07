'use strict';

const express = require ('express');
// const router = express.Router();
const model = require('../models');
const jwt = require('jsonwebtoken');

const passport = require('passport');
const passportJWT = require('passport-jwt');


module.exports = function(app) {

// ekstrak jwt agar tamoil di rest api
let ExtractJwt = passportJWT.ExtractJwt;
let JwtStrategy = passportJWT.Strategy;

// object untuk menampung jwt
let jwtOptions = {};
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = "gabutbener";

let strategy = new JwtStrategy(jwtOptions, (jwt_payload, next) => {
    let Person = getPerson({idPerson: jwt_payload.idPerson})
        if(Person) {
            next(null, Person);
        }else {
            next(null, false);
        }
});

passport.use(strategy);

// mengambil Person untuk bisa membuka routes yang di lovk
const getPerson = async obj => {
    return await model.Person.findOne({
        where: obj
    });
};

// login listing.
app.post('/api/login', async function(req, res, next) {
    try {
        const {
            email,
            password
        } = req.body;

        if (email && password) {
            let Person = await getPerson({email: email});

            if(!Person) {
                res.status(401).json({
                'status': 'ERROR',
                'messages': 'Incorrect email or password',
                'data': {},
                })
            }
            
            if(Person.password === password) {
                let payload = {idPerson: Person.idPerson}

                let token = jwt.sign(payload, jwtOptions.secretOrKey)

                res.status(201).json({
                    'status': 'OK',
                    'token': token,
                })

            }else {
                res.status(400).json({
                    'status': 'ERROR',
                    'messages': 'Incorrect password',
                })
            }
        }
    } catch (err) {
    res.status(400).json({
        'status': 'ERROR',
        'messages': err.message,
        'data': {},
    })
    }
});

// ,passport.authenticate('jwt', {session: false})

    const detailCvRoutes = require('./../controllers/detailCv-routes');
    app.use('/api/detail-cv',passport.authenticate('jwt', {session: false}), detailCvRoutes);

    const personRoutes = require('./../controllers/person-routes');
    app.use('/api/person', personRoutes);
    app.use('/api/person/:idPerson', personRoutes);
    app.use('/api/person/register', personRoutes);
    app.use('/api/person/update/:idperson', personRoutes);
    app.use('/api/person/delete/:idperson', personRoutes);

    const religionRoutes = require('./../controllers/religion-routes');
    app.use('/api/religion', religionRoutes);
    app.use('/api/religion/:nameReligion', religionRoutes);
    app.use('/api/religion/add', religionRoutes);
    app.use('/api/religion/update/:idReligion', religionRoutes);
    app.use('/api/religion/delete/:idReligion', religionRoutes);

    const gendreRoutes = require('./../controllers/gendre-routes');
    app.use('/api/gendre', gendreRoutes);
    app.use('/api/gendre/:nameGendre', gendreRoutes);
    app.use('/api/gendre/add', gendreRoutes);
    app.use('/api/gendre/update/:idGendre', gendreRoutes);
    app.use('/api/gendre/delete/:idGendre', gendreRoutes);

    const healthRoutes = require('./../controllers/health-routes');
    app.use('/api/health', healthRoutes);
    app.use('/api/health/:nameHealth', healthRoutes);
    app.use('/api/health/add', healthRoutes);
    app.use('/api/health/update/:idHealth', healthRoutes);
    app.use('/api/health/delete/:idHealth', healthRoutes);

    const languageRoutes = require('./../controllers/language-routes');
    app.use('/api/language', languageRoutes);
    app.use('/api/language/:language', languageRoutes);
    app.use('/api/language/add', languageRoutes);
    app.use('/api/language/update/:idlanguage', languageRoutes);
    app.use('/api/language/delete/:idlanguage', languageRoutes);

    const levelRoutes = require('./../controllers/level-routes');
    app.use('/api/level', levelRoutes);
    app.use('/api/level/:nameLevel', levelRoutes);
    app.use('/api/level/add', levelRoutes);
    app.use('/api/level/update/:idLevel', levelRoutes);
    app.use('/api/level/delete/:idLevel', levelRoutes);

    const languageSkillRoutes = require('./../controllers/languageSkill-routes');
    app.use('/api/language-skill', languageSkillRoutes);
    app.use('/api/language-skill/:idLanguageSkill', languageSkillRoutes);
    app.use('/api/language-skill/add', languageSkillRoutes);
    app.use('/api/language-skill/update/:idLanguageSkill', languageSkillRoutes);
    app.use('/api/language-skill/delete/:idLanguageSkill', languageSkillRoutes);

    const objectiveRoutes = require('./../controllers/objective-routes');
    app.use('/api/objective', objectiveRoutes);
    app.use('/api/objective/:idObjective', objectiveRoutes);
    app.use('/api/objective/add', objectiveRoutes);
    app.use('/api/objective/update/:idObjective', objectiveRoutes);
    app.use('/api/objective/delete/:idObjective', objectiveRoutes);

    const profileRoutes = require('./../controllers/profile-routes');
    app.use('/api/profile', profileRoutes);
    app.use('/api/profile/:idProfile', profileRoutes);
    app.use('/api/profile/add', profileRoutes);
    app.use('/api/profile/update/:idProfile', profileRoutes);
    app.use('/api/profile/delete/:idProfile', profileRoutes);

};