import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormControl, FormGroup, NgForm, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';



@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.css']
})
export class AdsComponent implements OnInit {

  constructor( private http: HttpClient, private route: Router ) { }

  nform: FormGroup;
  imagePreview;

  ngOnInit() {
    this.nform = new FormGroup({
      image: new FormControl(null, {
      })

    });
  }

  AddAd(form: NgForm){
    alert("Ad Added!");
    
    if(form.invalid){
      return;
    }

    console.log(form.value);

    this.http.post('http://localhost:3000/main/ad', {
      'AdTitle': form.value.adtitle,
      'StartTime': form.value.starttiming,
      'EndTime': form.value.endtiming,
      'Poster': this.imagePreview,

  }).subscribe(data => {
      //  console.log(data);
      if (data['status'] == 'OK') {
        //this.route.navigate(['dashboard']);
        //alert("Ad Added");
      }
      else
      {
        alert("Error Ad");
      }
    });

  }

  onImagePicked(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];;
    this.nform.patchValue({ image: file });
    this.nform.get('image').updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      // @ts-ignore

        this.imagePreview = reader.result;
        console.log(this.imagePreview)
  

      // this.imagePreview = reader.result;
      // console.log(this.imagePreview,n)
    };
    //console.log("asdsafgfs")
    reader.readAsDataURL(file);

  }

}
