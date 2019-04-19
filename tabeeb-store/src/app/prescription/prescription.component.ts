import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prescription',
  templateUrl: './prescription.component.html',
  styleUrls: ['./prescription.component.css']
})
export class PrescriptionComponent implements OnInit {

  constructor( private http: HttpClient, private route: Router) { }

  ngOnInit() {
  
  }

  addPrrescription(form: NgForm){
    // console.log("chal rha ha");
    this.http.post('http://localhost:3000/customers/save_opticspecs', {

      "Email": localStorage.getItem('email'),
      "CylindericalLeft": form.value.LCY,
      "CylindericalRight": form.value.RCY,
      "SphericalLeft": form.value.LSH,
      "SphericalRight": form.value.RSH,
      "AxisLeft": form.value.LAX,
      "AxisRight": form.value.RAX,
      "IPD": form.value.PD,

    }).subscribe((data) => {
      if(data['status'] == 'ok')
      {
        console.log(form.value,"No values");
        this.route.navigateByUrl('addressDetails');
      }
      else{
        alert("Error");
      }

    });
  }

  

}
