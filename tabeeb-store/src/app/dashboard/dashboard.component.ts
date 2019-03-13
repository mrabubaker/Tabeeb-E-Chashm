import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private http: HttpClient, private route: Router) { }
  users;

  ngOnInit() {
    this.FetchUser();
  }


  FetchUser(){
    this.http.post('http://localhost:3000/allUsers', {
      
    }).subscribe(data => {
       console.log(data[0]);
       this.users=data;
      if (data['status'] == 'OK') {
       
        //alert("Login Successful");
      }
      else
      {
       // alert("Error Login!");
      }
    });

  }  

  deleteuser(id){
    console.log(id);
    this.http.post('http://localhost:3000/deleteuser', {'id':id}).subscribe((data) => {
      this.FetchUser();

    });
    
  }

}
