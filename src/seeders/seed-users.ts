import { Test } from '@nestjs/testing';
import { UserService } from '../user/user.service';
import { AppModule } from '../app.module';

// seeders/seed-users.ts
const users = [
    {
      username: 'user1',
      email: 'user1@example.com',
      password: 'password1',
      role: 'user',
    },
    {
      username: 'user2',
      email: 'user2@example.com',
      password: 'password2',
      role: 'user',
    },
    // Add more sample users as needed
  ];


// Define your sample user data here (as shown previously)
(async () => {
  try {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    const app = moduleRef.createNestApplication();
    await app.init();

    const userService = app.get(UserService);

    // Seed the user data using the UserService
    for (const user of users) {
      await userService.create(user);
    }

    console.log('User data seeded successfully');
    await app.close();
  } catch (error) {
    console.error('Error seeding user data:', error);
  }
})();