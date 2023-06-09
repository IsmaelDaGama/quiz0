const express = require('express')

const regex = require("../regex/regex")
const AuthService = require("../domain/services/AuthService")
const router = express.Router()

const path = "/auth"

router.get(`${path}/login`, (req, res) => {
    let loginData = {
        email: req.query.email,
        password: req.query.password,
    }
    AuthService.AuthLogin(loginData).then((data) => {
        if (Object.hasOwn(data, "email")) {
            res.status(404)
            res.json({msg: "User not found"})
        } else {
            res.status(200)
            res.json({'_id' : data.id})
            //res.json({'session_id' : data._id})
        }
    }).catch(() => {
        res.status(500);
        res.json({msg: "Call the cops"})
    });
});

router.get(`${path}/home`, (req, res) => {
    let idData = {
        _id: req.query._id
    }

    AuthService.AuthUser(idData).then((data) => {
        if (Object.hasOwn(data, "_id")) {
            res.status(404)
            res.json({msg: "User not found"})
        } else {
            res.status(200)
            res.json(data)
            //res.json({'session_id' : data._id})
        }
    }).catch(() => {
        res.status(500);
        res.json({msg: "Call the cops"})
    });
});

router.get(`${path}/joinroom`, (req, res) => {
    let roomData = {
        code: req.query.code
    }
    AuthService.AuthJoin(roomData).then((data) => {
        if (Object.hasOwn(data, "code")) {
            res.status(404)
            res.json({msg: "Code not found"})
        } else {
            res.status(200)
            res.json(data)
            //res.json({'session_id' : data._id})
        }
    }).catch(() => {
        res.status(500);
        res.json({msg: "Call the cops"})
    });
});




router.post(`${path}/createroom`, (req, res) => {

    let newRoom = {
        code: req.body.code,
        players: req.body.players,
        level: req.body.level,
    }

        //console.log(newRoom);
        AuthService.AuthRoom(newRoom).then(() => {
            res.status(201)
            res.json({msg: "Room registered the user successfully :)"})
        }).catch(() => {
            res.status(500);
            res.json({msg: "Call the cops"})
        });

});


router.post(`${path}/signup`, (req, res) => {
    let errors = []
    let newUser = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        repeated_password: req.body.repeated_password
    }

    !regex.ValidateUsername(newUser.username) ? errors.push({Error: "Invalid username"}) : console.log("Valid Username");
    !regex.ValidateEmail(newUser.email) ? errors.push({Error: "Invalid email"}) : console.log("Valid Email");
    newUser.password !== newUser.repeated_password ? errors.push({Error: "Passwords do not match"}): console.log("Valid Passwords");


    if (errors.length == 0) {
        AuthService.AuthRegister(newUser).then(() => {
            res.status(201)
            res.json({msg: "Registered the user successfully :)"})
        }).catch(() => {
            res.status(500);
            res.json({msg: "Call the cops"})
        });
    } else {
        res.status(400)
        res.json(errors)
    }
});

router.put(`${path}/edit`, (req, res) => {
    let errors = []
    let newUser = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        repeated_password: req.body.repeated_password
    }

    !regex.ValidateUsername(newUser.username) ? errors.push({Error: "Invalid username"}) : console.log("Valid Username");
    !regex.ValidateEmail(newUser.email) ? errors.push({Error: "Invalid email"}) : console.log("Valid Email");
    newUser.password !== newUser.repeated_password ? errors.push({Error: "Passwords do not match"}): console.log("Valid Passwords");


    if (errors.length == 0) {
        AuthService.AuthUpdate(newUser).then(() => {
                res.status(202)
                res.json({msg: "Updated the user successfully :)"})
        }).catch(() => {
            res.status(500);
            res.json({msg: "Call the cops"})
        });
    } else {
        res.status(400)
        res.json(errors)
    }
});

router.get(`${path}/waitingroom`, (req, res) => {

});

module.exports = router;