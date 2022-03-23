import { Component, OnInit } from '@angular/core';
import { MyService } from '../services/my-service.service';

@Component({
  selector: 'htda-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  userLoginStatus: boolean = false;

  constructor(private mySer: MyService) { }

  ngOnInit(): void {
    this.mySer.myLoginSubjectR$.subscribe(data => {
      this.userLoginStatus = data;
    });
  }

}
