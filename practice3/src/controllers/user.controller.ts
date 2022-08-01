import {Request,Response} from 'express';
import { async } from 'rxjs';
import { Users } from '../models/user.model';
export const UserCtrl = {
    createUser:async(req:Request,res:Response)=>{
        const data = req.body;
        const newUser = await Users.create(data);
        res.json(newUser);
    },

    getAllUsers:async(req:Request,res:Response)=>{
        const users = await Users.find();
        res.status(200).json(users);
    },

    getUserById:async(req:Request,res:Response)=>{
        const id = req.params.id;
        const user = await Users.findOne({_id:id}).select("-password");
        res.status(200).json(user);
    },

    getUserByEmail:async(req:Request,res:Response)=>{
        const emailInput = req.query.email;
        const user = await Users.findOne({email:emailInput}).select("-password");
        res.status(200).json(user);
    },

    deleteUser:async(req:Request,res:Response)=>{
        const id = req.params.id;
        await Users.findByIdAndDelete(id);
        res.json('delete successfully');
    },

    updateUser:async(req:Request,res:Response)=>{
        const id = req.params.id;
        const data = req.body;
        const user = await Users.findOneAndUpdate({_id:id},{...req.body},{
            new:true,
        })

        res.json(user);
    },

    pagination:async(req:Request,res:Response)=>{
      const page = Number(req.query.page) || 1;
      const limit = Number(req.query.limit) || 5;  
      console.log(page,limit);
      const user = await Users.find().skip((page-1)*limit).limit(limit);
      res.json(user);
    }



    

}