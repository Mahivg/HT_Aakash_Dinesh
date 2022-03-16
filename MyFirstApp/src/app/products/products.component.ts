import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../models/product';
import { ProductService } from '../services/products.service';

@Component({
  selector: 'da-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  // productService: ProductService = new ProductService();

  constructor(public productService: ProductService, private router: Router) { } // Request fo an object

  ngOnInit(): void {
  }

  // We need to intimate Angular that it is going to receive data from parent
  // @Input()
  prods: Product[] = this.productService.getProducts();

  printProduct() {
    const products = this.productService.getProducts();
    console.log(products);
  }

  addProductToProducts() {
    var newProduct = new Product('001', 'Test1', 'test', 'test',[], false);
    this.productService.addProduct(newProduct);
    this.printProduct();
  }

  selectProduct(prod: Product) {

    this.router.navigateByUrl('/products/' + prod.id);

  }

}
