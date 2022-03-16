import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/products.service';

@Component({
  selector: 'da-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  // productService: ProductService = new ProductService();

  constructor(public productService: ProductService, private router: Router) { } // As Request

  ngOnInit(): void {
  }

  printProducts() {
    const products = this.productService.getProducts();
    console.log(products);
  }

  goBackTOProducts() {
    console.log('GO back to Products..');
    // Logic
    // Programatically Navigate
    this.router.navigateByUrl('/products');
  }

}
