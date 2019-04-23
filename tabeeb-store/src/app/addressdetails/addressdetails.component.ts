import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addressdetails',
  templateUrl: './addressdetails.component.html',
  styleUrls: ['./addressdetails.component.css']
})
export class AddressdetailsComponent implements OnInit {
customerdetail;

  constructor( private http: HttpClient, private route: Router) { }

  ngOnInit() {

  }

  AdduserAddress(form: NgForm){
    this.http.post('http://192.168.43.58:3000/customers/save_address', {
      "Email": localStorage.getItem('email'),
      "Building": form.value.buildingtext,
      "Street": form.value.streettext,
      "City": form.value.citytext,
      "Landmark": form.value.landmarktext,
      "Province": form.value.provincetext,
      "PostalCode": form.value.postalcodetext,
      "Phone": form.value.numbertext,
      "AlternativePhone": form.value.alternativetext,


    }).subscribe((data) => {
      if((data['status'] == 'OK')){
        // console.log("Address Added");
        this.route.navigateByUrl('orderdetails');
      } 
      else{
        console.log("Error in Address");
      }
    });
  }

  
}