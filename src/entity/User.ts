import type { Address } from "./Address"
import { Id } from "./id.value-object"
export class User {
    id: Id
    name: string
    addresses: Address[]
}
