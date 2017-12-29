import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-seller-list',
  templateUrl: './seller-list.component.html',
  styleUrls: ['./seller-list.component.css']
})
export class SellerListComponent implements OnInit {
  sellerID:number
  constructor(private routeInfo:ActivatedRoute) { }

  ngOnInit() {
    this.routeInfo.params.subscribe((params: Params) =>{
      this.sellerID = params['id']
    })//subscribe订阅
  }

}
