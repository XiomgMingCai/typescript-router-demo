# NgRouterDemo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


# url传参：
1.修改路由配置;
2.HTML中数组传参；
3.接受中将queryParams改为params即可；

# 订阅

当组件路由到自身的时候，组件不会重新创建，ngOnInit不会被调用，这里需要路由的订阅法
this.routeInfo.params.subscribe((params: Params) => this.stockId = params["id"])
路由改变(params: Params) => this.stockId = params["id"]这个方法被调用

# 辅助路由，

的添加方式在<router-outlet></router-outlet>下面添加带name属性的router-outlet,在路由配置文件中对应好辅助路由做好配置，那么就可有在同一个父组件中显示两个路由跳转的组件信息。注意调用方式：<a [routerLink]="[{outlets:{aux:'xxx'}}]">xxx</a>生成地址：/stock/22(aux:xxx)
