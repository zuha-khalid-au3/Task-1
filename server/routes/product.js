const express=require('express');
//middlewares

const {authCheck,adminCheck} =require('../middlewares/auth');
const router = express.Router();
const {create,listAll,remove,read,list,update,productsCount}=require('../controllers/userdb');
router.get('/userInternals/total',productsCount);
router.post('/userInternal',authCheck,adminCheck,create);

router.get('/userInternals/:count',listAll);
router.delete('/userInternals/:slug',authCheck,adminCheck,remove);
router.get('/userInternal/:slug',read);
router.put('/userInternal/:slug',authCheck,adminCheck,update);
router.post('/userInternals',list);



module.exports = router;