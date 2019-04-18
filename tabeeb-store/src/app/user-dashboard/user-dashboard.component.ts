import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import { Router, ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  param1: any;

  constructor(private http: HttpClient, private route: Router, private router: ActivatedRoute) { }

  ngOnInit(){
    
}
  }

