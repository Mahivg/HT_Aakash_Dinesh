import { Component, OnInit } from "@angular/core";
import { ProductService } from "../services/products.service";
import { UserService } from "../services/users.service";

@Component({
  selector: 'da-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  cartItems: string[] = [];

  userLoggedIn: boolean = false;

  constructor(private productService: ProductService, private userService: UserService) {}

  ngOnInit(): void {
    this.productService.mySubjectReceiver.subscribe(data => {
      console.log('Received Data in NavbarComponent');
      console.log(data);
      if(data != '') {
        this.cartItems.push(data);
        console.log(this.cartItems);
      }
    });

    this.userService.myLoginSubject$.subscribe(data => {
      this.userLoggedIn = data;
    });
  }
}
