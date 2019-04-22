import { Component, OnInit } from '@angular/core';
// import { NgForm } from '@angular/forms';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormControl, FormGroup, NgForm, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  shape = '0';
  style = '0';
  rim = '0';
  gender = '0';
  material = '0';
  category = '0';

  constructor(private http: HttpClient, private route: Router) { }
  nform: FormGroup;
  imagePreview;
  imagePreview1;
  imagePreview2;
  imagePreview3;
  imagePreview4;
  imagePreview5;
  variableclr;
  SeparattedColor;
  variablegender;
  Separattedgender;
  variableTag;
  SepratedTag;


  ngOnInit() {


    this.nform = new FormGroup({
      image: new FormControl(null, {
      })

    
    });

    
  }

  ProdcutAdd(form: NgForm) {
    // alert('Product Added');

    if (form.invalid) {
      console.log(form.value);
      // console.log(this.imagePreview)
      return;
    }


    // console.log(this.imagePreview,'sdfsdgf')
    //  console.log(form.value);
    this.variableclr = form.value.colorText;
    this.SeparattedColor = this.variableclr.split(",");
    console.log(this.SeparattedColor);

    this.variablegender = form.value.gendertext;
    this.Separattedgender = this.variablegender.split(",");
    console.log(this.Separattedgender);

    this.variableTag = form.value.tagtext;
    this.SepratedTag = this.variableTag.split(",");
    console.log(this.SepratedTag);



    this.http.post('http://192.168.43.58:3000/products/create_product', {
      //'product':form.value
      // 'Productid': form.value.productidtext,
      'ProductName': form.value.productnametext,
      'Description': form.value.productdescriptiontext,
      'ProductSpecifications': {
        'Category': form.value.categorytext,
        'Shape': form.value.shapetext,
        'Style': form.value.styletext,
        'Size': form.value.sizetext,
        'Rim': form.value.rimtext,
        'Gender': form.value.gendertext,
        'Material': form.value.materialtext,
        'TempleSize': form.value.TempleSizetext,
        'BridgeSize': form.value.BridgeSizetext,
        'EyeSize': form.value.EyeSizetext,
        'Color': this.SeparattedColor,
        
      },
      'ProductPhoto': this.imagePreview,
      // 'ARModel': this.imagePreview,
      'AllPhotos': [this.imagePreview1, this.imagePreview2, this.imagePreview3, this.imagePreview4],
      'Quantity': form.value.quantitytext,
      'Price': form.value.productpricetext,
      'TAG': this.SepratedTag,


    }).subscribe(data => {
      //  console.log(data);
      if (data['status'] == 'OK') {
        //this.route.navigate(['dashboard']);
        // alert("Product Added");
        console.log(status);
      }
      else {
        alert("Error!");
      }
    });
  }

  onImagePicked(event: Event, n) {
    const file = (event.target as HTMLInputElement).files[0];;
    this.nform.patchValue({ image: file });
    this.nform.get('image').updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      // @ts-ignore

      if (n == 0) {
        this.imagePreview = reader.result;
        console.log(this.imagePreview, n)
      }

      if (n == 1) {
        this.imagePreview1 = reader.result;
        console.log(this.imagePreview1, n)
      }
      if (n == 2) {
        this.imagePreview2 = reader.result;
        console.log(this.imagePreview2, n)
      }
      if (n == 3) {
        this.imagePreview3 = reader.result;
        console.log(this.imagePreview3, n)
      }

      if (n == 4) {
        this.imagePreview4 = reader.result;
        console.log(this.imagePreview4, n)
      }

      if (n == 5) {
        this.imagePreview5 = reader.result;
        console.log(this.imagePreview5, n)
      }

      // this.imagePreview = reader.result;
      // console.log(this.imagePreview,n)
    };
    //console.log("asdsafgfs")
    reader.readAsDataURL(file);

  }

}