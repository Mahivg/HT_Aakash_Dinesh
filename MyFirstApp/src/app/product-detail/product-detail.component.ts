import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../models/product';
import { ProductService } from '../services/products.service';

@Component({
  selector: 'da-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  // productService: ProductService = new ProductService();

  selectedProduct: Product;

  constructor(public productService: ProductService, private router: Router,
            private route: ActivatedRoute) { } // As Request

  ngOnInit(): void {

    this.route.params.subscribe(data => {
      console.log(data);
      var prodId = data.prodId;
      this.selectedProduct = this.productService.getProductById(prodId);
    })

  }

  printProducts() {
    const products = this.productService.getProducts();
    console.log(products);
  }

  goBackTOProducts() {
    console.log('Go back to Products..');
    // Logic
    // Programatically Navigate
    this.router.navigateByUrl('/products');
  }

}
