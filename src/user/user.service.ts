import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IUser } from './interfaces/user.interface';
import { ICreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<IUser>) {}

  async getAllUsers() {
    return this.userModel.find().sort({ updatedAt: -1});
  }

  async createUser(data: ICreateUserDto) {
    return this.userModel.create(data);
  }
  
  async deleteUser(id: number) {
    await this.userModel.findByIdAndDelete(id);
  }

  async updateUserEmail({ id, newEmail }: any) {
    await this.userModel.findByIdAndUpdate(id, { email: newEmail  });
  }
}
