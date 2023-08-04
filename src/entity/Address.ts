import type { User } from "./User"

export class Address {
    id: number
    city: string
    userId: number
    user: User
}