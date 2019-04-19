import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  product;

  constructor(private http: HttpClient, private route: Router) { }

  ngOnInit() {

    // this.route.queryParams
    // .subscribe(params => {
    //   console.log(params); // {order: "popular"}

    //   this.product = params;
    //   console.log(this.product); // popular
    // });
    // console.log('abc',localStorage.getItem('cart'))
    // this.product=JSON.parse(localStorage.getItem('cart'))
    this.getCart();
  }

  // remove(name){
  //   this.product = this.product.filter((value)=>{
  //       return name !== value.Productname;
  //   })
  //   localStorage.setItem('cart', JSON.stringify(this.product))
  //   }

  AddtoOrder() {
    //alert("chal rha ha")
    // console.log(this.product);
    this.route.navigate(['order']);

  }

  changeQuantity(e) {
    console.log("Yahoooo! KeyDown Prssed Successfully")
  }

  BuyNow(form: NgForm) {
    this.http.post('http://localhost:3000/sales', {

    }).subscribe(data => {
      console.log(data);
      if (data['status'] == 'OK') {
        //this.route.navigate(['login']);
      }
      else {
        alert("Error Signup!");
      }
    });
  }

  getCart() {
    this.http.post('http://localhost:3000/customers/cart_products_details', {
      "Email": localStorage.getItem('email'),

    }).subscribe((data) => {
      this.product = data;
      console.log(this.product);
    });

  }

  deletecartproduct(name) {
    // console.log('working delete button');
    this.http.post('http://localhost:3000/customers/remove_cart', {
      "Email": localStorage.getItem('email'),
      "ProductName": name,

    }).subscribe((data) => {
      this.getCart();
    });

  }

}
