//https://cnodejs.org/api/v1/topics
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from "@angular/router";
import {Goods} from "../goods/goods.component";
import {Observable} from "rxjs/Observable";
import {Injectable} from "@angular/core";

@Injectable()
export class GoodsResove implements Resolve<Goods> {
  constructor(private router: Router) {

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Goods> | Promise<Goods> | Goods {
    let id = route.params['id'];
    if (id == 1) {
      return new Goods(1, "IBM")
    } else if (id == 2) {
      return new Goods(2, "BABA")
    } else {
      this.router.navigate(['/home'])
    }
  }
}
