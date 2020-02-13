export interface ICreateUserDto {
  name: string;
  email: string;
  password: string;
}
export interface IUpdateUserDto {
  id: string;
  newName?: string;
  newEmail?: string;
}