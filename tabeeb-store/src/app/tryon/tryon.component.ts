import { Component, OnInit } from '@angular/core';
import { SharingImageService } from '../sharing-image.service';
import { TryonImageService } from '../tryon-image.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {trigger, state, style, animate, transition} from '@angular/animations';
declare let $: any;

@Component({
  selector: 'app-tryon',
  templateUrl: './tryon.component.html',
  styleUrls: ['./tryon.component.css'],

  animations: [
    // Each unique animation requires its own trigger. The first argument of the trigger function is the name
    trigger('rotatedState', [
      state('rotated', style({ transform: 'rotate(-5deg)' })),
      // state('zero', style({ transform: 'rotate(0)' })),
      state('rotatedR', style({ transform: 'rotate(5deg)' })),
      // transition('rotated => default', animate('4000ms ease-in')),
      transition('rotated => rotated', animate('400ms ease-in')),
      // transition('rotatedR => zero', animate('4000ms ease-in')),
      transition('rotatedR => rotatedR', animate('400ms ease-in'))
  ])
]
})
export class TryonComponent implements OnInit {

  constructor(private imageservice: SharingImageService, private tryonpicture: TryonImageService, private http: HttpClient, private route: Router) { }
  imagesource;
  trysource;
  width = 150;
  height = 80;
  ngOnInit() {
    this.imagesource = this.imageservice.getImage();
    console.log(this.imagesource);

    // this.trysource = this.tryonpicture.getImage();
    // console.log(this.trysource);
 
  $(function () {
    $('.draggableleft').draggable(
      {
      });});}

  getUrl() {
    console.log(this.imagesource.imageAsDataUrl)
    return `url(${this.imagesource.imageAsDataUrl})`;
  }

  // tryontUrl() {
  //   console.log(this.trysource.imageAsDataUrl)
  //   return `url(${this.trysource.imageAsDataUrl})`;
  // }

  // Backclick(){
  //   this.route.navigateByUrl('cart');
  // }
  state: string = 'default';

  rotateL() {
      this.state = 'rotated';
  }

  rotateR() {
    this.state = (this.state === 'rotated' ? 'zero' : 'rotatedR');
}


  zoomIn(){
    this.width = this.width+10;
    this.height = this.height+5;
  }

  
}
