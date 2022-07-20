import express from 'express'
import { UserCtrl } from '../controllers/user.controller';

const router = express.Router(); // de dinh nghia cac duong dan den thu muc

router.post('/',UserCtrl.createUser);

export default router;