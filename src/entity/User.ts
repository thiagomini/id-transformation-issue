import { Entity } from "typeorm"
import type { Address } from "./Address"

@Entity()
export class User {
    id: number
    name: string
    addresses: Address[]
}
