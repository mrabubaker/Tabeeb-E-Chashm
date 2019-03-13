import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor( private http: HttpClient, private route: Router ) { }

  ngOnInit() {
  }

  ProdcutAdd(form: NgForm) {
    alert('Product Added');

    if (form.invalid) {
      return;
    }


   console.log(form.value);

    this.http.post('http://localhost:3000/product', {
      //'product':form.value
      'Productid': form.value.productidtext,
      'Productname': form.value.productnametext,
      'Description': form.value.productdescriptiontext,
      'price': form.value.productpricetext,
      'noOfItems': form.value.noofitemstext
    }).subscribe(data => {
       console.log(data);
      if (data['status'] == 'OK') {
        //this.route.navigate(['dashboard']);
        //alert("Product Added");
      }
      else
      {
        alert("Error Signup!");
      }
    });
  }
}
