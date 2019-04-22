import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { empty } from 'rxjs';

@Component({
  selector: 'app-unavbar',
  templateUrl: './unavbar.component.html',
  styleUrls: ['./unavbar.component.css']
})
export class UnavbarComponent implements OnInit {
  Customer;
  loggedin = localStorage.email;
  constructor(public route: ActivatedRoute, private http: HttpClient, public router: Router) { }

  ngOnInit() {
    this.getName();
    console.log("Working on init");
  }

  logout() {
    localStorage.removeItem('email');
    this.router.navigateByUrl('login');
  }

  loginclick() {
    this.router.navigateByUrl('login');
  }

  cartclick() {
    this.router.navigateByUrl('cart');
  }

  PDclick() {
    this.router.navigateByUrl('camera');
  }

  wishclick() {
    this.router.navigateByUrl('wishlist');
  }

  home(){
    this.router.navigateByUrl('');
  }

  getName() {
    // console.log('okasd')
    this.http.post('http://localhost:3000/customers/getname', {
      "Email": localStorage.getItem('email'),
    }).subscribe((data) => {
      this.Customer = data;
      console.log(this.Customer);

    });
  }

  searchclick(){
    this.router.navigateByUrl('searchproducts');
  }
}
