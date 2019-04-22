import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ordermanagement',
  templateUrl: './ordermanagement.component.html',
  styleUrls: ['./ordermanagement.component.css']
})
export class OrdermanagementComponent implements OnInit {
  order: any;
  constructor( private http: HttpClient, private route: Router) { }

  ngOnInit() {
    this.Details();
  }


  Details() {
    this.http.post('http://192.168.43.58:3000/orders/all_order', {
      "CustomerEmail": localStorage.getItem('email'),


    }).subscribe((data) => {
      this.order = data;
      this.order.Array.forEach(element => {

      });
      
    });

  }


}
