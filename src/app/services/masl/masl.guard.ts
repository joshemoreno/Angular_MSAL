import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';

import { MsalService } from '@azure/msal-angular';

/* ---------------------------------------------------------------------------------------------------
  Copyright © Tecnología Informática Stefanini - Colombia 
  File        :  masl.guard  
  Product     :  Dominus 
  Version     :  1.0 
  Description :  Guardiand de rutas 
  Author      :  japopayan@latam.stefanini.com 
  Date        :  25/28/2021 
  ----------------------------------------------------------------------------------------------------
  Modification history
  ----------------------------------------------------------------------------------------------------
  Date          Author                          Modification
  
  ----------------------------------------------------------------------------------------------------
  */ 

@Injectable({
  providedIn: 'root'
})
export class MaslGuard implements CanActivate {

  constructor(private msalService: MsalService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.msalService.instance.getActiveAccount() == null){
        return false;
      }
    return true;
  }
  
}
