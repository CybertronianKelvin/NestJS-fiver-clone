import { Test, TestingModule } from '@nestjs/testing';
import { Model } from 'mongoose';
import { UserService } from './user.service';
import { User } from './interfaces/user.interface';
import { getModelToken } from '@nestjs/mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { NotFoundException } from '@nestjs/common';

const mockUserModel = () => ({
  create: jest.fn(),
  find: jest.fn(),
  findById: jest.fn(),
  findByIdAndUpdate: jest.fn(),
  findByIdAndDelete: jest.fn(),
});

describe('UserService', () => {
  let service: UserService;
  let userModel: Model<User>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        { provide: getModelToken('User'), useFactory: mockUserModel },
      ],
    }).compile();

    service = module.get<UserService>(UserService);
    userModel = module.get<Model<User>>(getModelToken('User'));
  });

  describe('create', () => {
    it('should create a new user', async () => {
      const mockCreateUserDto: CreateUserDto = {
        username: 'testuser',
        email: 'testuser@test.com',
        password: 'password',
        role: 'user',
      };
      const mockCreatedUser: User = {
        
        username: 'johndoe',
        email: 'johndoe@example.com',
        password: 'password',
        role: 'user',
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      jest.spyOn(userModel, 'create').mockResolvedValue(mockCreatedUser);

      const result = await service.create(mockCreateUserDto);

      expect(userModel.create).toHaveBeenCalledWith(mockCreateUserDto);
      expect(result).toEqual(mockCreatedUser);
    });
  });

  // describe('findAll', () => {
  //   it('should return an array of users', async () => {
  //     const mockUsers: User[] = [
  //       {
  //         _id: '60900633f0eb711ca460a2e9',
  //         createdAt: new Date(),
  //         updatedAt: new Date(),
  //         username: 'user1',
  //         email: 'user1@test.com',
  //         password: 'password',
  //         role: 'user',
  //       },
  //       {
  //         _id: '60900633f0eb711ca460a2ea',
  //         createdAt: new Date(),
  //         updatedAt: new Date(),
  //         username: 'user2',
  //         email: 'user2@test.com',
  //         password: 'password',
  //         role: 'user',
  //       },
  //     ];
  //     jest.spyOn(userModel, 'find').mockResolvedValue(mockUsers);
  //
  //     const result = await service.findAll();
  //
  //     expect(userModel.find).toHaveBeenCalled();
  //     expect(result).toEqual(
  //       mockUsers.map(({ password, ...user }) => user),
  //     );
  //   });
  // });
  //
  // describe('findOne', () => {
  //   it('should return a user by id', async () => {
  //     const mockUser: User = {
  //       _id: '60900633f0eb711ca460a2e9',
  //       createdAt: new Date(),
  //       updatedAt: new Date(),
  //       username: 'testuser',
  //       email: 'testuser@test.com',
  //       password: 'password',
  //       role: 'user',
  //     };
  //     jest.spyOn(userModel, 'findById').mockResolvedValue(mockUser);
  //
  //     const result = await service.findOne(mockUser._id);
  //
  //     expect(userModel.findById).toHaveBeenCalledWith(mockUser._id);
  //     expect(result).toEqual(mockUser);
  //   });
  // });

});
