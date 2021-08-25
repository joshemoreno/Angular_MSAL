import { Injectable } from '@angular/core';

import { MsalService } from '@azure/msal-angular';

/* ---------------------------------------------------------------------------------------------------
  Copyright © Tecnología Informática Stefanini - Colombia 
  File        :  login.service   
  Product     :  Dominus 
  Version     :  1.0 
  Description :  Servicio de de login con el consumo AzureAD 
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
export class LoginService {

  constructor(private msalService: MsalService) { }

  //?Metodo encargado del consumo del servicio de login de azureAD
  LoginUser(){
    this.msalService.loginRedirect();
  };
  
  //?Metodo encargado del consumo del servicio de logout de azureAD
  logout(){
    this.msalService.logout();
  };

  //?Metodo encargado de cargar el usuario a la sesion
  setSeccion(){
    this.msalService
    .instance
    .handleRedirectPromise()
    .then(
      res =>{
        if(res != null && res.account != null){
          this.msalService
            .instance
              .setActiveAccount(res.account);
        }
      }
    )
  };

  //?Metodo que valida si el usuario del servicio azureAD se encuentra activo
  isLogged(): boolean{
    return this.msalService.instance.getActiveAccount() != null;
  };

  //?Metodo que captura el username del usuario desde el servicio azureAD
  getName(){
    return this.msalService.instance.getActiveAccount()?.name;
  };

}
