import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private http: HttpClient, private route: Router) { }
  
  ngOnInit() {
  }

  onSignUp(form: NgForm) {
    console.log('signup form submitted');

    if (form.invalid) {
      return;
    }




    this.http.post('http://localhost:3000/user/register', {
      'first_name': form.value.firstet,
      'last_name': form.value.lastet,
      'email': form.value.emailet,
      'password': form.value.pass1
    }).subscribe(data => {
       console.log(data);
      if (data['status'] == 'OK') {
        this.route.navigate(['login']);
      }
      else
      {
        alert("Error Signup!");
      }
    });


    // console.log(form.value);
  }

}
