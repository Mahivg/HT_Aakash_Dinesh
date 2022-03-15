import { Component } from '@angular/core';
import { Product } from './models/product';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyFirstApp';

  selectedDiv: string = 'demo';

  myPTagId = 'pTag1';

  myNum = 10;

  myObj = {
    id: '10',
    name: 'Aakash'
  }

  myStudents: string[] = ['Akash', 'Dinesh', 'Magesh'];

  showDemo: boolean = true;

  selectedProduct: Product;

  clickMe(myNum: number) {
    var a = myNum; // 10
    console.log("I got Clicked...." + a );
  }

  selectProduct(prod: Product) {
    this.selectedProduct = prod;
  }

  changeSelectedDiv(divName: string) {
    this.selectedDiv = divName;
  }


}
