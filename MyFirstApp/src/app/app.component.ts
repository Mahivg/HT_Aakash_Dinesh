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

  myPTagId = 'pTag1';

  myNum = 10;

  myObj = {
    id: '10',
    name: 'Aakash'
  }

  products: Product[] = [
    new Product('p001', 'Kids School Bag', 'A bag with enough space for kids to keep books and box', `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea aut
    distinctio quos quidem error ipsam ad eum inventore architecto
    voluptate. Amet consectetur laborum fugit sint obcaecati architecto
    consequatur praesentium blanditiis.`, ['https://cdn.shopify.com/s/files/1/0508/5262/6598/products/1_1746cf25-d2e9-4ed2-8cc1-7d571234f7fe_1024x.jpg?v=1632226454'], true),

    new Product('p002', 'Water Bottle 1Lr', 'A premium design water bottle of 1 litre volume.', `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea aut
    distinctio quos quidem error ipsam ad eum inventore architecto
    voluptate. Amet consectetur laborum fugit sint obcaecati architecto
    consequatur praesentium blanditiis.`, ['https://takaterra.com/2535-medium_default/pastel-mint-bottle-260-qwetch.webp'], true),

    new Product('p003', 'Rayban Sunglaess', 'The UV layer of sun glass protects you from various UV rays attacks to eyes ', `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea aut
    distinctio quos quidem error ipsam ad eum inventore architecto
    voluptate. Amet consectetur laborum fugit sint obcaecati architecto
    consequatur praesentium blanditiis.`, ['https://m.media-amazon.com/images/I/51zEsraniRL._UX569_.jpg'], true),

    new Product('p004', 'Kids School Bag', 'A bag with enough space for kids to keep books and box', `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea aut
    distinctio quos quidem error ipsam ad eum inventore architecto
    voluptate. Amet consectetur laborum fugit sint obcaecati architecto
    consequatur praesentium blanditiis.`, ['https://cdn.shopify.com/s/files/1/0508/5262/6598/products/1_1746cf25-d2e9-4ed2-8cc1-7d571234f7fe_1024x.jpg?v=1632226454'], true),

    new Product('p005', 'Kids School Bag', 'A bag with enough space for kids to keep books and box', `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea aut
    distinctio quos quidem error ipsam ad eum inventore architecto
    voluptate. Amet consectetur laborum fugit sint obcaecati architecto
    consequatur praesentium blanditiis.`, ['https://cdn.shopify.com/s/files/1/0508/5262/6598/products/1_1746cf25-d2e9-4ed2-8cc1-7d571234f7fe_1024x.jpg?v=1632226454'], true),

    new Product('p006', 'Kids School Bag', 'A bag with enough space for kids to keep books and box', `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea aut
    distinctio quos quidem error ipsam ad eum inventore architecto
    voluptate. Amet consectetur laborum fugit sint obcaecati architecto
    consequatur praesentium blanditiis.`, ['https://cdn.shopify.com/s/files/1/0508/5262/6598/products/1_1746cf25-d2e9-4ed2-8cc1-7d571234f7fe_1024x.jpg?v=1632226454'], true),

    new Product('p007', 'Kids School Bag', 'A bag with enough space for kids to keep books and box', `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea aut
    distinctio quos quidem error ipsam ad eum inventore architecto
    voluptate. Amet consectetur laborum fugit sint obcaecati architecto
    consequatur praesentium blanditiis.`, ['https://cdn.shopify.com/s/files/1/0508/5262/6598/products/1_1746cf25-d2e9-4ed2-8cc1-7d571234f7fe_1024x.jpg?v=1632226454'], true),

    new Product('p008', 'Kids School Bag', 'A bag with enough space for kids to keep books and box', `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea aut
    distinctio quos quidem error ipsam ad eum inventore architecto
    voluptate. Amet consectetur laborum fugit sint obcaecati architecto
    consequatur praesentium blanditiis.`, ['https://cdn.shopify.com/s/files/1/0508/5262/6598/products/1_1746cf25-d2e9-4ed2-8cc1-7d571234f7fe_1024x.jpg?v=1632226454'], true),

    new Product('p009', 'Kids School Bag', 'A bag with enough space for kids to keep books and box', `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea aut
    distinctio quos quidem error ipsam ad eum inventore architecto
    voluptate. Amet consectetur laborum fugit sint obcaecati architecto
    consequatur praesentium blanditiis.`, ['https://cdn.shopify.com/s/files/1/0508/5262/6598/products/1_1746cf25-d2e9-4ed2-8cc1-7d571234f7fe_1024x.jpg?v=1632226454'], true),
  ];

  users: User[] = [
    new User('Dinesh', 'test@123', 'dinesh@gmail.com'),
    new User('Akash', 'test@123', 'akash@gmail.com'),
    new User('Magesh', 'test@123', 'Mahi@gmail.com')
  ];


}
