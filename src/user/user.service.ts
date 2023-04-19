import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from "./interfaces/user.interface";
import { ObjectId } from "mongodb";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private userModel: Model<User>) {}

  async create(user: CreateUserDto): Promise<CreateUserDto> {
    const newUser = new this.userModel(user);
    return await newUser.save();
  }

  async findAll(): Promise<CreateUserDto[]> {
    const users = await this.userModel.find().exec();
    return users.map((user) => {
      const { username, email, password, role, createdAt, updatedAt } = user;
      return { username, email, password, role, createdAt, updatedAt };
    });
  }

  async findOne(id: string) {
    return await this.userModel.findById(new ObjectId(id)).exec();
  }
  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    return await this.userModel
      .findByIdAndUpdate(id, updateUserDto, { new: true })
      .exec();
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
