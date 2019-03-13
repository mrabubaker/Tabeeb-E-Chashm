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

    if (!localStorage.getItem('email')) {
      alert('Please Login!');
      return;
    }
    else {
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

      if (localStorage.getItem('cart')) {
        this.a = JSON.parse(localStorage.getItem('cart'))
        let b = this.a.some(item => item.id == this.product.id)
        if (!b) {
          this.product.qty = form.value.qty;
          this.a.push(this.product)
          console.log(this.product)
          localStorage.setItem('cart', JSON.stringify(this.a))
          this.router.navigate(['../../cart']);
        }else{
          alert('item is already exists');
        }


      }
      else {

        this.product.qty = form.value.qty;
        this.a.push(this.product)
        localStorage.setItem('cart', JSON.stringify(this.a))
        console.log(this.a)
        this.router.navigate(['../../cart']);
      }

    }
  }

  fetchSelectedProduct() {
    this.route.params.subscribe((params) => {
      console.log(params.id);
      this.http.post('http://localhost:3000/selectedproduct', { 'productid': params.id }).subscribe((data) => {
        console.log(data);
        this.product = data;
        // console.log(this.answers);


      });
    });
  }

}
