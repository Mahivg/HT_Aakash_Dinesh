import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { User } from "../models/user";

@Injectable({
  providedIn:'root'
})
export class UserService {

  isUserLoggedIn: boolean = false;

  myLoginSubject = new BehaviorSubject<boolean>(false);
  myLoginSubject$ = this.myLoginSubject.asObservable();

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

  checkUser(userName: string, password: string) {
    var logggedIn = false;
    var user = this.users.find(u => u.userName == userName);
    if(user) {
      if(user.password == password) {
        logggedIn = true;
      }
    }
    return logggedIn;
  }

}
