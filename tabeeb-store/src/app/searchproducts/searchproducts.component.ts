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
  HexagonalProduct;
  OctagonalProduct;
  RoundProduct;
  WayfarerProduct;
  RectangleProduct;
  SquareProduct;
  OvalProduct;
  CatEyeProduct;
  AviatorProduct;
  smallproducts;
  mediumproducts;
  largeproducts;
  fullrim;
  halfrim;
  menswear;
  womenswear;
  metalglasses;
  plasticglasses;
  acetateglasses;
  mixmaterialglasses;
  blackclr;
  greyclr;
  goldclr;
  redclr;
  brownclr;
  constructor(public route: ActivatedRoute, private http: HttpClient, public router: Router) { }

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

    else if (this.param1 === 'Hexagonal') {
      this.SearchProduct('Style', 'Hexagonal', 'e');
    }

    else if (this.param1 === 'Octagonal') {
      this.SearchProduct('Style', 'Octagonal', 'f');
    }

    else if (this.param1 === 'Round') {
      this.SearchProduct('Style', 'Round', 'g');
    }

    else if (this.param1 === 'Wayfarer') {
      this.SearchProduct('Style', 'Wayfarer', 'h');
    }

    else if (this.param1 === 'Rectangle') {
      this.SearchProduct('Style', 'Rectangle', 'i');
    }

    else if (this.param1 === 'Square') {
      this.SearchProduct('Style', 'Square', 'j');
    }

    else if (this.param1 === 'Oval') {
      this.SearchProduct('Style', 'Oval', 'k');
    }

    else if (this.param1 === 'CatEye') {
      this.SearchProduct('Style', 'Cat Eye', 'l');
    }

    else if (this.param1 === 'Aviator') {
      this.SearchProduct('Style', 'Aviator', 'm');
    }

    else if (this.param1 === 'Small') {
      this.SearchProduct('Size', 'Small', 'n');
    }

    else if (this.param1 === 'Medium') {
      this.SearchProduct('Size', 'Medium', 'o');
    }

    else if (this.param1 === 'Large') {
      this.SearchProduct('Size', 'Large', 'p');
    }

    else if (this.param1 === 'FullRim') {
      this.SearchProduct('Rim', 'Full Rim', 'q');
    }

    else if (this.param1 === 'HalfRim') {
      this.SearchProduct('Rim', 'Half Rim', 'r');
    }

    else if (this.param1 === 'menglasses') {
      this.SearchProduct('Gender', 'Men', 's');
    }

    else if (this.param1 === 'womenglasses') {
      this.SearchProduct('Gender', 'Women', 't');
    }

    else if (this.param1 === 'metal') {
      this.SearchProduct('Material', 'Metal', 'u');
    }

    else if (this.param1 === 'plastic') {
      this.SearchProduct('Material', 'Plastic', 'v');
    }

    else if (this.param1 === 'acetate') {
      this.SearchProduct('Material', 'Acetate', 'w');
    }

    else if (this.param1 === 'mixmaterial') {
      this.SearchProduct('Material', 'Mix Material', 'x');
    }

    else if (this.param1 === 'black') {
      this.SearchProduct('Color', 'Women', 'y');
    }

    else if (this.param1 === 'grey') {
      this.SearchProduct('Color', 'Grey', 'z');
    }

    else if (this.param1 === 'gold') {
      this.SearchProduct('Color', 'Gold', 'aa');
    }

    else if (this.param1 === 'red') {
      this.SearchProduct('Color', 'Red', 'ab');
    }

    else if (this.param1 === 'brown') {
      this.SearchProduct('Color', 'Brown', 'ac');
    }
  }

  categoryProducts(body, condition) {
    // const body = { TAG: 'Trending'};

    this.http.post('http://192.168.43.58:3000/products/get_category_products', { 'Category': body }).subscribe((data: any) => {
      console.log(data, "its working");
      if (condition == 'a')
        this.mensunglass = data.Array;

      else if (condition == 'b')
        this.womensunglass = data.Array;

      else if (condition == 'c')
        this.meneyeglass = data.Array;

      else if (condition == 'd')
        this.womeneyeglass = data.Array;

      if (data['status'] == 'OK') {
        console.log(status);
        //alert("Login Successful");
      }
      else {
        // alert("Error Login!");
      }
    });

  }

  SearchProduct(category, body, condition) {

    this.http.post('http://192.168.43.58:3000/products/search', { 'Category': category, 'Keyword': body }).subscribe((data: any) => {

      if (condition == 'e')
        this.HexagonalProduct = data.Array;

      else if (condition == 'f')

        this.OctagonalProduct = data.Array;
      else if (condition == 'g')
        this.RoundProduct = data.Array;
      else if (condition == 'h')
        this.WayfarerProduct = data.Array;
      else if (condition == 'i')
        this.RectangleProduct = data.Array;
      else if (condition == 'j')
        this.SquareProduct = data.Array;
      else if (condition == 'k')
        this.OvalProduct = data.Array;
      else if (condition == 'l')
        this.CatEyeProduct = data.Array;
      else if (condition == 'm')
        this.AviatorProduct = data.Array;
      else if (condition == 'n')
        this.smallproducts = data.Array;
      else if (condition == 'o')
        this.mediumproducts = data.Array;
      else if (condition == 'p')
        this.largeproducts = data.Array;
      else if (condition == 'q')
        this.fullrim = data.Array;
      else if (condition == 'r')
        this.halfrim = data.Array;
      else if (condition == 's')
        this.menswear = data.Array;
      else if (condition == 't')
        this.womenswear = data.Array;
      else if (condition == 'u')
        this.metalglasses = data.Array;
      else if (condition == 'v')
        this.plasticglasses = data.Array;
      else if (condition == 'w')
        this.acetateglasses = data.Array;
      else if (condition == 'x')
        this.mixmaterialglasses = data.Array;
      else if (condition == 'y')
        this.blackclr = data.Array;
      else if (condition == 'z')
        this.greyclr = data.Array;
      else if (condition == 'aa')
        this.goldclr = data.Array;
      else if (condition == 'ab')
        this.redclr = data.Array;
      else if (condition == 'ac')
        this.brownclr = data.Array;
      if (data['status'] == 'OK') {
        console.log(status);

      }
      else {

      }
    });


  }

}
