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
    // console.log('signup form submitted');

    if (form.invalid) {
      return;
    }

    console.log()




    this.http.post('http://192.168.43.58:3000/customers/signup', {
      'CustomerName': form.value.firstet + " " + form.value.lastet, 
      'Email': form.value.emailet,
      'Password': form.value.pass1

    }).subscribe(data => {
      if (data['status'] == 'Sign Up Successful') {
        console.log(status);
        this.route.navigate(['login']);
      }
      else
      {
        alert("Error Signup!");
      }
    });


   console.log(form.value);
  }

}
