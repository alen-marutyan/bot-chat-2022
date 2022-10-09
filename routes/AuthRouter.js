const express = require('express');
const { registerNewUser, loginUser } = require('../controllers/AuthController');
const { checkEmailUnique } = require('../middleware/checkEmailUnique');
const { validateRegister, validateLogin } = require('../middleware/validate');
const router = express.Router();

/* register endpoint */
router.post('/register',validateRegister, checkEmailUnique, registerNewUser );

//login

router.post(`/login`, validateLogin,loginUser)

module.exports = router;