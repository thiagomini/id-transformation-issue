import "reflect-metadata"
import { DataSource } from "typeorm"
import { AddressSchema } from "./entity/Address.schema"
import { UserSchema } from "./entity/User.schema"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "postgres",
    synchronize: true,
    logging: false,
    entities: [UserSchema, AddressSchema],
    migrations: [],
    subscribers: [],
})
