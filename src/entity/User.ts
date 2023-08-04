import { Entity } from "typeorm"
import type { Address } from "./Address"
import { Id } from "./id.value-object"

@Entity()
export class User {
    id: Id
    name: string
    addresses: Address[]
}
