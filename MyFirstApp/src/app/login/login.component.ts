import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { User } from "../models/user";
import { UserService } from "../services/users.service";

@Component({
  selector: 'da-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  userService: UserService = new UserService();

  usersData: User[] = this.userService.getUsers();

  constructor(){
    console.log('Login component Constructor....');
  }

  ngOnInit(): void {
   console.log('Component Started.....');
  }

  ngOnDestroy(): void {
    console.log('Component Left or destroyed.....');
  }

  login() {

  }

}
