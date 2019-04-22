import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-searchproducts',
  templateUrl: './searchproducts.component.html',
  styleUrls: ['./searchproducts.component.css']
})
export class SearchproductsComponent implements OnInit {
  param1: any;
  meneyeglass;
  womeneyeglass;
  mensunglass;
  womensunglass;
  constructor( public route: ActivatedRoute, private http: HttpClient, public router: Router ) { }

  ngOnInit() {
    this.route.queryParams
    .subscribe(params => {
      console.log(params); // {order: "popular"}

      this.param1 = params.searching;
    });

    if (this.param1 === 'mensungalsses') {
      this.categoryProducts('Men Sunglasses', 'a');
    }
    else if (this.param1 === 'womensungalsses') {
      this.categoryProducts('Women Sunglasses', 'b');
    }

    else if (this.param1 === 'meneyeglasses') {
      this.categoryProducts('Men Eyeglasses', 'c');
    }

    else if (this.param1 === 'womeneyeglasses') {
      this.categoryProducts('Women Eyeglasses', 'd');
    }

  }

  categoryProducts(body, condition) {
    // const body = { TAG: 'Trending'};

    this.http.post('http://192.168.43.58:3000/products/get_category_products', {'Category': body}).subscribe((data: any) => {
      console.log(data, "its working"); 
      // console.log(data);
      if (condition == 'a')
        // this.MenEG = 'asdasd';
        this.mensunglass = data.products;
        
      //console.log(this.Products)
      else if (condition == 'b')
        //this.WomenEG = 'asdsadsdsfdsf';
        // console.log(this.WomenEG);
        this.womensunglass = data.products;
      else if (condition == 'c')
        this.meneyeglass = data.products;
      else if (condition == 'd')
        this.womeneyeglass = data.products;
      if (data['status'] == 'OK') {
        console.log(status);
        //alert("Login Successful");
      }
      else {
        // alert("Error Login!");
      }
    });

  }

}
