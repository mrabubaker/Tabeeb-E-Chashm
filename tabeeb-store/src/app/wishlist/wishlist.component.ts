import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
product;
  constructor(private http: HttpClient, public router: Router) { }

  ngOnInit() {
    this.Wishlistdetails();
    // this.product=JSON.parse(localStorage.getItem('wishlist'))
  }

  // remove(name){
  //   this.product = this.product.filter((value)=>{
  //       return name !== value.Productname;
  //   })
  //   localStorage.setItem('wishlist', JSON.stringify(this.product))
  //   }

    Wishlistdetails(){
      this.http.post('http://localhost:3000/customers/wishlist_products_details', {
        "Email": localStorage.getItem('email'),
        
      }).subscribe((data) => {
        this.product = data;
        // console.log(this.product,'fgfdgd');
      });
  
    }

    RemoveWishlistProduct(name){
      console.log("Wishlist remove working")
      this.http.post('http://localhost:3000/customers/remove_wishlist', {
        "Email": localStorage.getItem('email'),
        "ProductName": name,
        
      }).subscribe((data) => {
        this.Wishlistdetails();
      });
  
    }

}
