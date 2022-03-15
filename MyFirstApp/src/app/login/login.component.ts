import { Component, Input } from "@angular/core";
import { User } from "../models/user";
import { UserService } from "../services/users.service";

@Component({
  selector: 'da-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  userService: UserService = new UserService();

  usersData: User[] = this.userService.getUsers();

}
