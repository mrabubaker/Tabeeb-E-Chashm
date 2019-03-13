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
    this.http.post('http://localhost:3000/allProducts', {

    }).subscribe(data => {
      //alert(data); 
      //console.log(data[0]);
      this.products = data;
      if (data['status'] == 'OK') {

        //alert("Login Successful");
      }
      else {
        // alert("Error Login!");
      }
    });
  }

  deleteproduct(id) {
    //alert(id);
    this.http.post('http://localhost:3000/deleteproduct', { 'id': id }).subscribe((data) => {
      this.FetchProducts();

    });
  }
}
