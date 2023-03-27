import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Res,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Response } from 'express';
import { CreateUserDto } from 'src/users/dto/users.dtos';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  getUsers() {
    return this.userService.getUsers();
  }

  @Get(':id')
  findUsersById(@Param('id', ParseIntPipe) id: string) {
    return this.userService.findUsersById(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  createUsers(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }

  @Delete(':id')
  deleteUser(@Param('id', ParseIntPipe) id: string, @Res() res: Response) {
    this.userService
      .deleteUser(id)
      .then(() => {
        return res.status(204).send();
      })
      .catch((error) => {
        return res.status(418).json({ error }).send();
      });
  }
}
