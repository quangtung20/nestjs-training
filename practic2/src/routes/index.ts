import express from 'express'
import userRouter from './user.route'

const router = express.Router(); // de dinh nghia cac duong dan den thu muc

router.use('/user',userRouter);

export default router;