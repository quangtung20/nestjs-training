import express from 'express'
import { UserCtrl } from '../controllers/user.controller';

const router = express.Router(); // de dinh nghia cac duong dan den thu muc

router.post('/',UserCtrl.createUser);
router.get('/search',UserCtrl.getUserByEmail);
router.get('/pagination',UserCtrl.pagination);
router.get('/:id',UserCtrl.getUserById);
router.get('/',UserCtrl.getAllUsers);
router.delete('/:id',UserCtrl.deleteUser);
router.put('/:id',UserCtrl.updateUser);

export default router;