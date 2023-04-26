import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { getModelToken } from '@nestjs/mongoose';
import { CreateUserDto } from './dto/create-user.dto';

describe('UserService', () => {
  let service: UserService;
  const userDto: CreateUserDto = {
    username: 'test',
    email: 'test@example.com',
    password: 'password2',
    role: 'user',
  };
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        { provide: getModelToken('User'), useValue: jest.fn() },
        { provide: getModelToken('Gig'), useValue: jest.fn() },
      ],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create User', async () => {
    const user = await service.create(userDto);
    expect(user).not.toBeNull();
    expect(user.email).toEqual(userDto.email);
    expect(user.password).not.toEqual(userDto.password);
  });
});
