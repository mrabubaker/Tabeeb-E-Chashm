import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-discounts',
  templateUrl: './discounts.component.html',
  styleUrls: ['./discounts.component.css']
})
export class DiscountsComponent implements OnInit {

  constructor( private http: HttpClient, private route: Router ) { }

  ngOnInit() {
  }

  addDiscount(form: NgForm) {
    alert('Discount Added');

    if (form.invalid) {
      return;
    }




    this.http.post('http://192.168.43.58:3000/main/discount', {
      'DiscountTitle': form.value.discouttitle,
      'DiscountPercentage': form.value.discountpercentage,
      'StartTime': form.value.starttime,
      'EndTime': form.value.endtime,
     

    }).subscribe(data => {

      if (data['status'] == 'OK') {
        this.route.navigate(['']);
      }
      else
      {
        alert("Error Discount!");
      }
    });

  }


}
