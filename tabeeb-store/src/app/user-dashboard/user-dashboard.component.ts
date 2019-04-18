import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {NgForm} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import { Router, ActivatedRoute} from '@angular/router';
import { removeDebugNodeFromIndex } from '@angular/core/src/debug/debug_node';
import { directiveCreate } from '@angular/core/src/render3/instructions';
import { getHostElement } from '@angular/core/src/render3';


@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  param1: any;
  x= "hello";
  @ViewChild('temp') divToHide: ElementRef;

  constructor(private http: HttpClient, private route: Router, private router: ActivatedRoute) {

    
    
   }

  ngOnInit(){    

    setTimeout(() => {
      
      this.divToHide.nativeElement.style.display = 'none'
    },5000)

}

 Timeinterval(){
   this.x="abubaker"
 }
  }

