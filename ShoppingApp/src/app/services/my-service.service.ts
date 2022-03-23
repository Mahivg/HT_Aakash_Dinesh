import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Product } from "../models/Product";
import { User } from "../models/User";

@Injectable({
  providedIn: 'root'
})
export class MyService {

  private products: Product[] = [];

  private users: User[] = [
    new User('001', 'Magesh', 'mahi@gmail.com', 'test')
  ];


  myLoginSubject = new BehaviorSubject<boolean>(false);
  myLoginSubjectR$ = this.myLoginSubject.asObservable();

  getProducts() {
    return this.products;
  }

  getUsers() {
    return this.users;
  }

  checkUser(email: string, password: string) {
    var loginCheck: boolean = false;
    var user = this.users.find(u => u.email == email);
    if(user) {
      if(user.password == password) {
        loginCheck = true;
      }
    }
    return loginCheck;
  }


}
