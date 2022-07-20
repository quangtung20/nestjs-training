import {Request,Response} from 'express';
import { Users } from '../models/user.model';
export const UserCtrl = {
    createUser:async(req:Request,res:Response)=>{
        const data = req.body;
        const newUser = await Users.create(data);
        res.json(newUser);
    }
}