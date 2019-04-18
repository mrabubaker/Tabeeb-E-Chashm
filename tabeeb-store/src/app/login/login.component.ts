import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient, private route: Router) { }

  ngOnInit() {
  }

  onlogin(form : NgForm){
    // console.log('form submit sucessfully');
    if(form.invalid){
      return;
    }

    this.http.post('http://localhost:3000/customers/login', {
      'Email': form.value.emailet,
      'Password': form.value.passet,
      
      
    }).subscribe(data => {
       console.log(data);
      if (data['status'] == 'Login Successful') {
      
        
        localStorage.setItem('email', form.value.emailet);
        
        this.route.navigate(['']);
        //alert("Login Successful");
      }
      else
      {
       console.log("Error Login!");
      }
    });

  }

}
