import { EntitySchema } from "typeorm";
import { Address } from "./Address";
import { idTransformer } from "./id.transformer";

export const AddressSchema = new EntitySchema<Address>({
  name: 'Address',
  tableName: 'user_addresses',
  target: Address,
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: true,
      transformer: idTransformer,
    },
    city: {
      type: String,
      nullable: false,
    },
    userId: {
      type: Number,
      nullable: false,
      transformer: idTransformer,
    }
  },
  relations: {
    user: {
      type: 'many-to-one',
      target: 'User',
      joinColumn: {
        name: 'user_id',
      },
      inverseSide: 'addresses',
    }
  }
})