const express = require('express');
const router = express.Router();
const {validationResult, check} = require('express-validator');

const users = {
    'demo@demo.com': {
        email: 'demo@demo.com',
        token: '12312adasd'
    }
}

const loginValidators = [
    check('email')
        .trim()
        .notEmpty()
        .withMessage('Email cannot be empty')
        .isEmail()
        .withMessage('Email format is not valid'),
    check('password')
        .trim()
        .notEmpty()
        .withMessage('Password cannot be empty')
        .isLength({min: 4}),
]

router.route("/login").post(loginValidators, (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({errors: errors.array()});
    }

    //todo: make users repository and validate user

    if (req.body.email && users[req.body.email]) {
        res.json({
            status: true,
            data: users[req.body.email],
        })
    } else {
        res.json({
            status: false
        })
    }
})

module.exports = router;
