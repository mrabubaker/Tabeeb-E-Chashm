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
  ipaddress;

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        console.log(params); // {order: "popular"}

        this.param1 = params.order;
      });

    if (this.param1 === 'men') {
      this.categoryProducts('Men Eyeglasses', 'a');
    }
    else if (this.param1 === 'women') {
      this.categoryProducts('Women Eyeglasses', 'b');
    }

    else if (this.param1 === 'menS') {
      this.categoryProducts('Men Sunglasses', 'c');
    }

    else if (this.param1 === 'womenS') {
      this.categoryProducts('Women Sunglasses', 'd');
    }
    
    else {
      this.param1 = 'all';
      this.FetchProducts({ TAG: 'Trending' }, 'a');
      this.FetchProducts({ TAG: 'Deal Of The Day' }, 'b');
      this.FetchProducts({ TAG: 'Top Picks' }, 'c');

    }

  }


  FetchProducts(body, condition) {
    // const body = { TAG: 'Trending'};
    // this.ipaddress = localStorage.getItem('ipAddress'),
    console.log(this.ipaddress);
    this.http.post('http://192.168.43.58:3000/products/get_tag_products', body).subscribe((data: any) => {
      //alert(data); 
      // console.log(data);
      if (condition == 'a')
        this.ProductsTrending = data.Array;
      // console.log(this.Products)
      else if (condition == 'b')
        this.Productsdeal = data.Array;
      else if (condition == 'c')
        this.ProductsTop = data.Array;
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

    this.http.post('http://192.168.43.58:3000/products/get_category_products', {'Category': body}).subscribe((data: any) => {
     
    // console.log(data);
      if (condition == 'a')
        // this.MenEG = 'asdasd';
        this.MenEG = data.Array;
        
      //console.log(this.Products)
      else if (condition == 'b')
        //this.WomenEG = 'asdsadsdsfdsf';
        // console.log(this.WomenEG);
        this.WomenEG = data.Array;
      else if (condition == 'c')
        this.MenSG = data.Array;
      else if (condition == 'd')
        this.WomenSG = data.Array;
      if (data['status'] == 'OK') {
        console.log(status);
        //alert("Login Successful");
      }
      else {
        // alert("Error Login!");
      }
    });

  }

  test(){
    const limitedProducts = [];
    for (let index = 0; index < this.ProductsTrending.length; index++) {
      const element = this.ProductsTrending[index];
      if(index < 4)
      limitedProducts.push(element);
    }
    console.log(limitedProducts)
    return limitedProducts;
  }

  test2(){
    const limitedProducts = [];
    for (let index = 0; index < this.ProductsTop.length; index++) {
      const element = this.ProductsTop[index];
      if(index < 4)
      limitedProducts.push(element);
    }
    console.log(limitedProducts)
    return limitedProducts;
  }

  test3(){
    const limitedProducts = [];
    for (let index = 0; index < this.Productsdeal.length; index++) {
      const element = this.Productsdeal[index];
      if(index < 4)
      limitedProducts.push(element);
    }
    console.log(limitedProducts)
    return limitedProducts;
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
