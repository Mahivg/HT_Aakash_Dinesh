import { User } from "../models/user";

export class UserService {

  users: User[] = [
    new User('Dinesh', 'test@123', 'dinesh@gmail.com'),
    new User('Akash', 'test@123', 'akash@gmail.com'),
    new User('Magesh', 'test@123', 'Mahi@gmail.com')
  ];

  getUsers() {
    return this.users;
  }

  addUser(user: User) {
    this.users.push(user);
  }
}
