import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeorm';
import { CreateUserDto } from 'src/users/dto/users.dtos';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  createUser(createUserDto: CreateUserDto) {
    const newUser = this.userRepository.create(createUserDto);
    return this.userRepository.save(newUser);
  }

  findUsersById(id: string) {
    return this.userRepository.findOneBy({
      id,
    });
  }

  async getUsers() {
    const data = await this.userRepository.find();
    if (data.length <= 0) {
      return { message: 'No data found' };
    } else {
      return data;
    }
  }

  async deleteUser(id: string) {
    const userExists = await this.userRepository.exist({
      where: {
        id,
      },
    });
    if (!userExists) {
      return Promise.reject({ message: 'Id not found' });
    }

    this.userRepository.delete({
      id,
    });
  }
}
