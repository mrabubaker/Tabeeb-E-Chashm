import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {

  constructor(private http: HttpClient, private route: Router) { }

  products;

  ngOnInit() {
    this.FetchProducts();
  }


  FetchProducts() {
    this.http.get('http://localhost:3000/products/get_all_products', {

    }).subscribe(data => {
      //alert(data); 
      console.log(data);
      this.products = data;
      if (data['status'] == 'OK') {

        //alert("Login Successful");
      }
      else {
        console.log("Error");
      }
    });
  }

  deleteproduct(name) {
    console.log("working delete products");
    this.http.post('http://localhost:3000/products/deleteproduct', {
      "ProductName": name,
    }).subscribe(data => {
      this.FetchProducts();
    });

  }
}
