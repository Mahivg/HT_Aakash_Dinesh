import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MyService } from '../services/my-service.service';

@Component({
  selector: 'htda-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private myService: MyService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      userName: new FormControl(),
      password: new FormControl()
    });
  }

  login() {
    console.log(this.loginForm.value);
    var userLogin = this.myService.checkUser(this.loginForm.value.userName, this.loginForm.value.password);
    if(userLogin == true) {
      this.router.navigateByUrl('/products');
      this.myService.myLoginSubject.next(true);
    }

    if(userLogin == false) {
      this.myService.myLoginSubject.next(false);
    }
  }

}
