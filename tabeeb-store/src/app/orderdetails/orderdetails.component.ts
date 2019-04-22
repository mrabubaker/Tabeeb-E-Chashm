import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orderdetails',
  templateUrl: './orderdetails.component.html',
  styleUrls: ['./orderdetails.component.css']
})
export class OrderdetailsComponent implements OnInit {
  customerdetail;
  product;
  sum: any;
  optics: any;
  photos = [];
  constructor(private http: HttpClient, private route: Router) {

  }

  ngOnInit() {
    this.sum = 0;
    this.getDetails();
    this.getCart();

  }

  getDetails() {
    // console.log("getdetails is working")
    this.http.post('http://192.168.43.58:3000/customers/get_optical_specs_and_address', {
      "Email": localStorage.getItem('email'),

    }).subscribe((data) => {
      this.customerdetail = data;
      // console.log(this.customerdetail.ADDRESS, "working");
      this.optics = {
        "CylindericalLeft":
          this.customerdetail.OpticalSpecifications.Cylinderical.LeftEye,
        "CylindericalRight":
          this.customerdetail.OpticalSpecifications.Cylinderical.RightEye,
        "SphericalLeft":
          this.customerdetail.OpticalSpecifications.Spherical.LeftEye,
        "SphericalRight":
          this.customerdetail.OpticalSpecifications.Spherical.RightEye,
        "AxisLeft":
          this.customerdetail.OpticalSpecifications.Axis.LeftEye,
        "AxisRight":
          this.customerdetail.OpticalSpecifications.Axis.RightEye,
        "IPD":
          this.customerdetail.OpticalSpecifications.IPD,
      }

    });
  }

  getCart() {
    this.http.post('http://192.168.43.58:3000/customers/cart_products_details', {
      "Email": localStorage.getItem('email'),

    }).subscribe((data) => {
      this.product = data;
      // console.log(this.product);
      this.product.Array.forEach(product => {
        this.sum = this.sum + product.Price;
        this.photos.push(product.ProductName);
      });
      // console.log(this.sum)
    });

  }

  changeaddress() {
    this.route.navigateByUrl('addressdetails');
  }

  placeorder() {
    // alert("working");
    this.http.post('http://192.168.43.58:3000/orders/place_order', {
      "CustomerEmail": localStorage.getItem('email'),
      "Product": this.photos,
      "OpticalSpecifications": this.optics,
      "Shipping_Address": this.customerdetail.ADDRESS,
      "OrderTotalPrice": this.sum,


    }).subscribe((data) => {
      this.route.navigateByUrl('orders');
      this.emptycart();
    });

  }

  emptycart() {
    this.http.post('http://192.168.43.58:3000/customers/empty_cart', {
      "Email": localStorage.getItem('email'),

    }).subscribe((data) => {
    });
  }

}
