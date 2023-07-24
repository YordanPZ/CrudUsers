export interface User {
  birthday?: string
  email?: string
  id?: number
  image_url?: string
  first_name?: string
  last_name?: string
  password?: string
}
export interface deleteUser {
  deleteUser: (id: number) => void
}
