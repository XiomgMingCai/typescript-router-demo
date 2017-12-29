import {CanActivate} from "@angular/router";

export class PermissionGuard implements CanActivate {

  canActivate() {
    let hasPermission: boolean = Math.random() > 0.4;
    if (!hasPermission)
      console.log('用户无权访问');
    else
      console.log('用户访问');

    return hasPermission
  }
}
