import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument,  } from 'src/schemas/users.schema';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private UserModel: Model<UserDocument>
    ) {}
  async create(CreateUserDto: CreateUserDto): Promise<User> {
    return new this.UserModel(CreateUserDto).save();
  }

 async findAll() {
    return this.UserModel.find();
  }

  findOne(name: string) {
    return this.UserModel
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.UserModel.updateOne({ _id: id }, updateUserDto);
  }

  remove(id: string) {
    return this.UserModel.deleteOne({ _id: id });
  }
}
