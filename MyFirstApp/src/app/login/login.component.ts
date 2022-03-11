import { Component, Input } from "@angular/core";
import { User } from "../models/user";

@Component({
  selector: 'da-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  @Input()
  usersData: User[];

}
