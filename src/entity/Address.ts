import type { User } from "./User"
import { Id } from "./id.value-object"

export class Address {
    id: Id
    city: string
    userId: Id
    user: User
}