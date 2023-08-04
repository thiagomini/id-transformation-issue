import { AppDataSource } from "../data-source";
import { Address } from "./Address";
import { AddressSchema } from "./Address.schema";
import { User } from "./User";
import { UserSchema } from "./User.schema";
import { Id } from "./id.value-object";

describe('User', () => {

  beforeAll(async () => {
    await AppDataSource.initialize();
    await AppDataSource.getRepository(AddressSchema).delete({});
    await AppDataSource.getRepository(UserSchema).delete({});
  });

  test('connects to the database',async () => {
    expect(AppDataSource.isInitialized).toBe(true);
  })

  test('creates a user', async () => {
    // Arrange
    const userRepository = AppDataSource.getRepository(UserSchema);
    const user = new User()
    user.name = 'John Doe';
    await userRepository.save(user);

    const anAddress = new Address()
    anAddress.city = 'New York';
    anAddress.user = user;
    anAddress.userId = user.id;
   
    user.addresses = [anAddress];

    // Act
    const savedUser = await AppDataSource.getRepository(UserSchema).save(user);

    // Assert
    expect(savedUser).toBeTruthy();
  });
});