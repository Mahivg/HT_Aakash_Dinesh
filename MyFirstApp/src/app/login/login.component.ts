import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { User } from "../models/user";
import { UserService } from "../services/users.service";

@Component({
  selector: 'da-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  usersData: User[];

  loginFG: FormGroup;

  constructor(private userService: UserService, private router: Router){
    console.log('Login component Constructor....');
  }

  ngOnInit(): void {
   console.log('Component Started.....');
   this.usersData = this.userService.getUsers();
   this.loginFG = new FormGroup({
     userName: new FormControl(),
     password: new FormControl()
   });
  }

  ngOnDestroy(): void {
    console.log('Component Left or destroyed.....');
  }

  login() {
    console.log(this.loginFG.value);
    var userLoginStatus = this.userService.checkUser(this.loginFG.value.userName, this.loginFG.value.password);
    console.log(userLoginStatus);
    if(userLoginStatus == true) {
      this.userService.myLoginSubject.next(true);
      this.router.navigateByUrl('/products');
    } else {
      this.userService.myLoginSubject.next(false);
    }
  }

  // login(myForm: any) {
  //   console.log(myForm.value);
  //   var userLoginStatus = this.userService.checkUser(myForm.value.userName, myForm.value.password);
  //   console.log(userLoginStatus);
  //   if(userLoginStatus == true) {
  //     this.userService.myLoginSubject.next(true);
  //     this.router.navigateByUrl('/products');
  //   } else {
  //     this.userService.myLoginSubject.next(false);
  //   }
  // }

}
