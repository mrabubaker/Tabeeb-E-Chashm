import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-ordersummaary',
  templateUrl: './ordersummaary.component.html',
  styleUrls: ['./ordersummaary.component.css']
})
export class OrdersummaaryComponent implements OnInit {
  customerdetail
  constructor(private http: HttpClient, private route: Router) { }

  ngOnInit() {
    console.log("init working!")
    // this.getDetails();
  }


  getDetails() {
    // console.log("getdetails is working")
    this.http.post('http://localhost:3000/customers/get_optical_specs', {
      "Email": localStorage.getItem('email'),

    }).subscribe((data) => {
      this.customerdetail = data;
      console.log(this.customerdetail.Address, "working");
    });
  }

}
