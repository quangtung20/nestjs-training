import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    async addNewUser(body:any){
        return body;
    }

    async getAllUsers():Promise<string>{
        return 'get all'
    }

    async getById(id:string):Promise<string>{
        return id;
    }

    async updateUser(id:string, body:any):Promise<any>{
        return {
            id:id,
            ...body
        };
    }

    async deleteUser(id:string):Promise<any>{
        return 'deleteUser';
    }

    async paginate(page:number, limit:number):Promise<any>{
        return {
            page,
            limit
        }
    }


}
