import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.css']
})
export class AdsComponent implements OnInit {

  constructor( private http: HttpClient, private route: Router ) { }

  ngOnInit() {
  }

  AddAd(form: NgForm){
    alert("Ad Added!");
    
    if(form.invalid){
      return;
    }

    console.log(form.value);

    this.http.post('http://localhost:3000/main/ad', {
      'AdTitle': form.value.adtitle,
      'StartTime': form.value.starttiming,
      'EndTime': form.value.endtiming,
      'Poster': form.value.posterforad

  }).subscribe(data => {
       console.log(data);
      if (data['status'] == 'OK') {
        //this.route.navigate(['dashboard']);
        //alert("Ad Added");
      }
      else
      {
        alert("Error Ad");
      }
    });

  }

}
