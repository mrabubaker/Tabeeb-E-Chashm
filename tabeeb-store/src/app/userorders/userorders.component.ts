import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userorders',
  templateUrl: './userorders.component.html',
  styleUrls: ['./userorders.component.css']
})
export class UserordersComponent implements OnInit {
  order: any;
  totalprice: any;

  constructor(private http: HttpClient, private route: Router) { }

  ngOnInit() {
    // console.log("User Dashboard init working");
    // this.route.navigateByUrl('cart');
    this.Details();
    
  }

  Details() {
    this.http.post('http://192.168.43.58:3000/orders/get_order', {
      "CustomerEmail": localStorage.getItem('email'),


    }).subscribe((data) => {
      this.order = data;
      this.order.Array.forEach(element => {
        this.totalprice = element.price;
      });
      
    });
   
    

  }

}
