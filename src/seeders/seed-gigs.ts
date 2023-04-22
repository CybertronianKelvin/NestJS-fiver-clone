import { Test } from '@nestjs/testing';
import { GigsService } from '../gigs/gigs.service';
import { AppModule } from '../app.module';

// seeders/seed-users.ts
const gigs = [
  {
    title: 'Micheal J',
    description: 'Lorem ipsum dolor',
    category: 'gig',
    sellerId: '644044af39e360a2ddd3ab61',
    price: 5.40,
    status: 'Active',
    tags: ['htmls', 'uk'],
  },
];

// Define your sample user data here (as shown previously)
(async () => {
  try {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    const app = moduleRef.createNestApplication();
    await app.init();

    const gigsService = app.get(GigsService);

    // Seed the user data using the UserService
    for (const gig of gigs) {
      await gigsService.create(gig);
    }

    console.log('Gigs data seeded successfully');
    await app.close();
  } catch (error) {
    console.error('Error seeding user data:', error);
  }
})();
