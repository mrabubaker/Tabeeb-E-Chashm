import { Component } from '@angular/core';
import {Subject, Observable} from "rxjs";
import {WebcamImage} from 'ngx-webcam';
import { SharingImageService } from '../sharing-image.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-opencamera',
  templateUrl: './opencamera.component.html',
  styleUrls: ['./opencamera.component.css']
})
export class OpencameraComponent {

  constructor(private imageservice: SharingImageService, private router: Router) {}

  public seconds:number ;
   private trigger: Subject<void> = new Subject<void>();

  // latest snapshot
  public webcamImage: WebcamImage = null;

  public triggerSnapshot(): void {
    this.seconds = 3;
    setTimeout(()=>{
      this.seconds = 2;
     setTimeout(()=>{
       this.seconds = 1
       setTimeout(()=>{
         this.trigger.next(); 
         this.seconds = null;
       },2000)
     },2000) 
    },2000)
       
  }

  public handleImage(webcamImage: WebcamImage): void {
    // console.info("received webcam image", webcamImage);
    this.webcamImage = webcamImage;
    this.imageservice.setImage(this.webcamImage);
    // console.log(this.webcamImage);
    if(this.webcamImage){
      // console.log(this.webcamImage, 'yahi ha  khtoi ka bacha');
      this.router.navigate(['/MeasurePD']);
    }
    else{
      console.log('adfsadf')
    }
  }

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

}

