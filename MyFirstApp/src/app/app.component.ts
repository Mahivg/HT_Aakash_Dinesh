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

    new Product('p004', 'Camouflage Cap', 'A cap that gives you a army man feeling, premium design and quality', `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea aut
    distinctio quos quidem error ipsam ad eum inventore architecto
    voluptate. Amet consectetur laborum fugit sint obcaecati architecto
    consequatur praesentium blanditiis.`, ['https://img.joomcdn.net/146c07c63a842e001d548917ab6eaa7494f0e668_original.jpeg'], true),

    new Product('p005', 'Geneva Leather Watch', 'Made of quartz design, with water proof and multi functionality', `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea aut
    distinctio quos quidem error ipsam ad eum inventore architecto
    voluptate. Amet consectetur laborum fugit sint obcaecati architecto
    consequatur praesentium blanditiis.`, ['https://www.looksgud.in/upload/item-image/2237/1bygr/1bygr-jbrl-black-wrist-watch-men-watches-business-fashion-style-new_500x500_0.jpg'], true),

    new Product('p006', 'David Cooloff Perfume', 'Gives freshness entire day with guaranteed 120 sprays for 250ml. Smell of rose and lime.', `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea aut
    distinctio quos quidem error ipsam ad eum inventore architecto
    voluptate. Amet consectetur laborum fugit sint obcaecati architecto
    consequatur praesentium blanditiis.`, ['https://i5.walmartimages.com/asr/b0088e70-4cec-43ae-bb3f-c46e7e8ac9d4.ff6b83568ecb08d7c619efa39efdc2e3.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF'], true),

    new Product('p007', 'MacBook Pro', 'HDR display, 8 GB Ram, Mac OS 11.10.1. High performace and touch screen', `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea aut
    distinctio quos quidem error ipsam ad eum inventore architecto
    voluptate. Amet consectetur laborum fugit sint obcaecati architecto
    consequatur praesentium blanditiis.`, ['https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bGFwdG9wc3xlbnwwfHwwfHw%3D&w=1000&q=80'], true),

    new Product('p008', 'Nokia G20', 'Power packed smart phone with 5000 mah Battery, 8GB RAM, 256GB Memory. Qualcomm 865 processor', `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea aut
    distinctio quos quidem error ipsam ad eum inventore architecto
    voluptate. Amet consectetur laborum fugit sint obcaecati architecto
    consequatur praesentium blanditiis.`, ['https://cdn.shopify.com/s/files/1/0508/5262/6598/products/1_1746cf25-d2e9-4ed2-8cc1-7d571234f7fe_1024x.jpg?v=1632226454'], true),

    new Product('p009', 'MI TV 45"inch', 'MI provides best when it comes to TV. 45 inch high retina screen and smart connection options like bluetooth', `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea aut
    distinctio quos quidem error ipsam ad eum inventore architecto
    voluptate. Amet consectetur laborum fugit sint obcaecati architecto
    consequatur praesentium blanditiis.`, ['https://www.mylloyd.com/media/products/zoom1-min.jpg'], true),
  ];

  selectedProduct: Product = this.products[0];

  users: User[] = [
    new User('Dinesh', 'test@123', 'dinesh@gmail.com'),
    new User('Akash', 'test@123', 'akash@gmail.com'),
    new User('Magesh', 'test@123', 'Mahi@gmail.com')
  ];


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
