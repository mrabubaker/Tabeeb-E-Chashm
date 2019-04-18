import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { empty } from 'rxjs';

@Component({
  selector: 'app-unavbar',
  templateUrl: './unavbar.component.html',
  styleUrls: ['./unavbar.component.css']
})
export class UnavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  logout() {
    if (localStorage.empty) {
      alert('You have not already Logged In');
    }
    else {
      localStorage.removeItem('email');
      localStorage.removeItem('cart');
      this.router.navigateByUrl('login');
    }
  }

  loginclick(){
    this.router.navigateByUrl('login'); 
  }

}
