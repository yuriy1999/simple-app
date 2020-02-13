import { Controller, Get, Inject, HttpCode, Body, Post, Delete, Param, Patch, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { ICreateUserDto, IUpdateUserDto } from './dto/create-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @HttpCode(200)
  @Get('/all')
  // @Query('timestamp')
  public async getAllUsers() {
    return this.userService.getAllUsers();
  }

  @HttpCode(201)
  @Post('/') // TODO add validation
  public async createUser(@Body() payload: ICreateUserDto) {
    return this.userService.createUser(payload);
  }

  @HttpCode(204)
  @Patch('/')
  public async updateUserEmail(@Body() payload: IUpdateUserDto) {
    return this.userService.updateUserEmail(payload);
  }

  @HttpCode(204)
  @Delete('/:id')
  public async deleteUser(@Param('id') id: number)   {
    return this.userService.deleteUser(id);
  }
}
