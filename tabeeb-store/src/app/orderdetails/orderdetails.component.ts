import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orderdetails',
  templateUrl: './orderdetails.component.html',
  styleUrls: ['./orderdetails.component.css']
})
export class OrderdetailsComponent implements OnInit {
  customerdetail;
  product;
  sum:any;
  constructor(private http: HttpClient, private route: Router) { 

  }

  ngOnInit() {
    this.sum = 0;
    this.getDetails();
    this.getCart();
  
  }

  getDetails() {
    // console.log("getdetails is working")
    this.http.post('http://localhost:3000/customers/get_optical_specs_and_address', {
      "Email": localStorage.getItem('email'),

    }).subscribe((data) => {
      this.customerdetail = data;
      console.log(this.customerdetail.ADDRESS, "working");
    });
  }

  getCart() {
    this.http.post('http://localhost:3000/customers/cart_products_details', {
      "Email": localStorage.getItem('email'),

    }).subscribe((data) => {
      this.product = data;
      //console.log(this.product);
      this.product.Array.forEach(product => {
        this.sum = this.sum + product.Price
      });
      console.log(this.sum)
    });

  }

  changeaddress(){
    this.route.navigateByUrl('addressdetails');
  }

  placeorder(){
    this.route.navigateByUrl('order');
  }
}
