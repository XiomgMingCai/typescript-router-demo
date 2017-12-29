import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private router:Router){

  }
  toStock(){
    // this.router.navigate(['stock'])
    this.router.navigate(['stock'], {queryParams: {id: 3}})
    // this.router.navigateByUrl('/stock?id=2')
}
  toProduct(){
    this.router.navigate(['/product',3])
  }
}
