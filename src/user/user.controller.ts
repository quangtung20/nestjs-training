import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(
        private userService: UserService
    ){}
    @Post('/register') //user/register
    createUser(
        @Body() body:any
    ){
        return this.userService.addNewUser(body);
    }



    @Get('/paginate')
    paginate(
        @Query('page') page:number,
        @Query('limit') limit:number,
    ){
        return this.userService.paginate(page, limit);
    }

    @Get('/:id')
    getById(@Param() id:string){
        console.log(id);
        return this.userService.getById(id);
    }

    @Get('/')
    getAllUsers() {
        return this.userService.getAllUsers();
    }

    @Put('/:id')
    updateUser(
        @Param('id') id:string,
        @Body() body:any,
    ){
        return this.userService.updateUser(id, body)
    }

    @Delete('/:id')
    deleteUser(
        @Param('id') id:string,
    ){
        return this.userService.deleteUser(id);
    }
}
