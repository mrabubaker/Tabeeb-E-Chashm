import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  param1: any;

  constructor(public route: ActivatedRoute, private http: HttpClient, public router: Router) { }

  ProductsTrending;
  Productsdeal;
  ProductsTop;
  MenEG;
  WomenEG;
  MenSG;
  WomenSG;

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        console.log(params); // {order: "popular"}

        this.param1 = params.order;
      });

    if (this.param1 === 'men') {
      this.categoryProducts('Male Sunglasses', 'a');
    }
    else if (this.param1 === 'women') {
      this.categoryProducts('Female Sunglasses', 'b');
    }
    else {
      this.param1 = 'all';
      this.FetchProducts({ TAG: 'Trending' }, 'a');
      this.FetchProducts({ TAG: 'DealOfTheDay' }, 'b');
      this.FetchProducts({ TAG: 'TopPicks' }, 'c');

    }

  }


  FetchProducts(body, condition) {
    // const body = { TAG: 'Trending'};

    this.http.post('http://localhost:3000/products/get_tag_products', body).subscribe((data: any) => {
      //alert(data); 
      // console.log(data);
      if (condition == 'a')
        this.ProductsTrending = data.products;
      // console.log(this.Products)
      else if (condition == 'b')
        this.Productsdeal = data.products;
      else if (condition == 'c')
        this.ProductsTop = data.products;
      if (data['status'] == 'OK') {
        console.log(status);
        //alert("Login Successful");
      }
      else {
        // alert("Error Login!");
      }
    });

  }

  categoryProducts(body, condition) {
    // const body = { TAG: 'Trending'};

    this.http.post('http://localhost:3000/products/get_category_products', {'Category': body}).subscribe((data: any) => {
      console.log(data); 
      // console.log(data);
      if (condition == 'a')
        // this.MenEG = 'asdasd';
        this.MenEG = data.products;
        
      //console.log(this.Products)
      else if (condition == 'b')
        //this.WomenEG = 'asdsadsdsfdsf';
        // console.log(this.WomenEG);
        this.WomenEG = data.products;
      else if (condition == 'c')
        this.MenSG = data.products;
      else if (condition == 'd')
        this.WomenSG = data.products;
      if (data['status'] == 'OK') {
        console.log(status);
        //alert("Login Successful");
      }
      else {
        // alert("Error Login!");
      }
    });

  }


  // AddtoCart(form: NgForm) {
  //   if (form.invalid) {
  //     return;
  //   }
  //   if (!localStorage.getItem('email')) {
  //     alert('LOGIN REQUIRED');
  //     return;
  //   }
  //   else{
  //     this.router.navigate(['cart']);
  //   }


  //}
}
