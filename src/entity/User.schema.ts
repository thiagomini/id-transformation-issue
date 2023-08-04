import { EntitySchema } from "typeorm";
import { User } from "./User";

export const UserSchema = new EntitySchema<User>({
  name: 'User',
  tableName: 'users',
  target: User,
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: true,
    },
    name: {
      type: String,
      nullable: false,
    }
  },
  relations: {
    addresses: { 
      type: 'one-to-many',
      eager: true,
      cascade: true,
      target: 'Address',
      inverseSide: 'user',
    }
  }
})