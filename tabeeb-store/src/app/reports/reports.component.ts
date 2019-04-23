import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
report;
  constructor(public route: ActivatedRoute, private http: HttpClient, public router: Router) { }

  ngOnInit() {
    this.reports();
  }


  reports() {
    this.http.get('http://192.168.43.58:3000/BI/send_request', {

    }).subscribe((data) => {
      this.report = data;
    });
  }
  
}
