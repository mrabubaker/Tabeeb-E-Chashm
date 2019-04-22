import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-moreproducts',
  templateUrl: './moreproducts.component.html',
  styleUrls: ['./moreproducts.component.css']
})
export class MoreproductsComponent implements OnInit {

  constructor(public route: ActivatedRoute, private http: HttpClient, public router: Router) { }
  ProductsTrending;
  Productsdeal;
  ProductsTop;
  param1;

  ngOnInit() {
    this.route.queryParams
    .subscribe(params => {
      console.log(params); // {order: "popular"}

      this.param1 = params.order;
    });

    if(this.param1 === 'trending')
    {
      this.FetchProducts({ TAG: 'Trending' }, 'a');
    }
    else if(this.param1 === 'deal')
    {
      this.FetchProducts({ TAG: 'Deal Of The Day' }, 'b');
    }
    else if (this.param1 === 'top')
    {
      this.FetchProducts({ TAG: 'Top Picks' }, 'c');
    }
  }

  FetchProducts(body, condition) {
    // const body = { TAG: 'Trending'};
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
}
