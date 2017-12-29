import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   isPro: boolean;
   par: any;

  constructor(private routeInfo: ActivatedRoute) {
  }

  ngOnInit() {
    this.isPro = this.routeInfo.snapshot.data[0].isPro
    this.par = this.routeInfo

  }

}
