import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
 product;
  constructor( private http: HttpClient, private route: ActivatedRoute ) { }

  ngOnInit() {

    // this.route.queryParams
    // .subscribe(params => {
    //   console.log(params); // {order: "popular"}

    //   this.product = params;
    //   console.log(this.product); // popular
    // });
    console.log('abc',localStorage.getItem('cart'))
    this.product=JSON.parse(localStorage.getItem('cart'))
  }

  remove(name){
    this.product = this.product.filter((value)=>{
        return name !== value.Productname;
    })
    localStorage.setItem('cart', JSON.stringify(this.product))
    }

    AddtoOrder(){
      //alert("chal rha ha")
      console.log(this.product);
      

    }

}
