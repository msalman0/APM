import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailsGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let id =+ next.paramMap.get('id');
    console.log("Passed id in URL is : " + id);
    if (isNaN (id)  || id< 0 ){
      this.router.navigate(['/products'])
      return false;
    }
      return true;
  }
  constructor(private router : Router){

  }
  
}
