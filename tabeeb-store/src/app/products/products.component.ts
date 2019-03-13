import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(public route: ActivatedRoute, private http: HttpClient, public router: Router) { }

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

  // AddtoCart(form: NgForm) {
  //   if (form.invalid) {
  //     return;
  //   }
  //   if (!localStorage.getItem('email')) {
  //     alert('LOGIN REQUIRED');
  //     return;
  //   }
  //   else{
  //     this.router.navigate(['cart']);
  //   }


  //}
}
