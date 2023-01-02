const { Router } = require('express');
const { check } = require('express-validator');
const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');
const router = Router();


// Crear un nuevo usuario
router.post('/new',[
    check('name','el nombre obligatorio').not().isEmpty(),
    check('email','el email es obligatorio para poder crear un nuevo uusario').isEmail(),
    check('password','la contrasena es obligatoria').isLength({min:6}),
    validarCampos,
    
], crearUsuario);

//Login de usuario
router.post('/',[
    check('email','el email es obligatorio').isEmail(),
    check('password','la contrasena es obligatoria').isLength({min:6})
], loginUsuario);
//Validar token
router.get('/renew', validarJWT , revalidarToken);



module.exports = router;