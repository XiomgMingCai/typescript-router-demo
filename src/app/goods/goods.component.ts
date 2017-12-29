import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Route, Router} from "@angular/router";

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.css']
})
export class GoodsComponent implements OnInit {
  private goods: Goods;

  constructor(private router: Router,private routeInfo:ActivatedRoute) {
  }

  ngOnInit() {
    this.routeInfo.data.subscribe((data:{goods:Goods})=>{
      this.goods = data.goods
    })
  }

}

export class Goods {
  constructor(public id: number, public name: string) {

  }

}
