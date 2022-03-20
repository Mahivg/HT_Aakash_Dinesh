import { Component, OnInit } from "@angular/core";
import { ProductService } from "../services/products.service";

@Component({
  selector: 'da-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  cartItems: string[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.mySubjectReceiver.subscribe(data => {
      console.log('Received Data in NavbarComponent');
      console.log(data);
      if(data != '') {
        this.cartItems.push(data);
        console.log(this.cartItems);
      }
    });
  }
}
