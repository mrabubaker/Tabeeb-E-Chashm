import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-viewdetails',
  templateUrl: './viewdetails.component.html',
  styleUrls: ['./viewdetails.component.css']
})
export class ViewdetailsComponent implements OnInit {

  constructor(public route: ActivatedRoute, private http: HttpClient, public router: Router) { }
  a = []
  product;


  ngOnInit() {
    this.fetchSelectedProduct();
  }

  // onAddToCart(form: NgForm) {
  //   console.log('form submitted sucessfully');
  //   console.log(form.value);
  // }

  onAddToCart(form: NgForm) {

    console.log(form.value);

   
      //   // this.router.navigate(['../../cart'], { queryParams: { productname: this.product.Productname, productprice: this.product.price, 
      //   // noofproducts: this.product.noOfItems
      //     this.http.post('http://localhost:3000/cart/product', {

      //     }).subscribe(data => {
      //       //alert(data); 
      //       //console.log(data[0]);
      //       this.product = data;
      //       if (data['status'] == 'OK') {

      //         //alert("Login Successful");
      //       }
      //       else {
      //         // alert("Error Login!");
      //       }
      //     });
      // }
      
    
  }

  fetchSelectedProduct() {
    this.route.params.subscribe((params) => {
      console.log(params.id);
      this.http.post('http://localhost:3000/products/viewdetails', { 'productid': params.id }).subscribe((data) => {
        // console.log(data,'asdas');
        this.product = data;
        // console.log(this.answers);


      });
    });
  }

}
