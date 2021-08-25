import { Component, OnInit } from '@angular/core';

import { LoginService } from 'src/app/services/login/login.service';

/* ---------------------------------------------------------------------------------------------------
  Copyright © Tecnología Informática Stefanini - Colombia 
  File        :  login.component   
  Product     :  Dominus 
  Version     :  1.0 
  Description :  Componente el cual consume los servicios para el compoenete de login
  Author      :  japopayan@latam.stefanini.com 
  Date        :  25/28/2021 
  ----------------------------------------------------------------------------------------------------
  Modification history
  ----------------------------------------------------------------------------------------------------
  Date          Author                          Modification
  
  ----------------------------------------------------------------------------------------------------
  */ 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private LogUser:LoginService) { }
  
  //?Metodo de arranque encargado de caragar usuario a la sesion
  ngOnInit(): void {
    this.LogUser.setSeccion();
  };
  
  //?Metodo que inicia sesion
  onLogIn(){
    this.LogUser.LoginUser();
  };

  //?Metodo que valida si hay sesion activa
  isLoggedIn(): boolean{
    return this.LogUser.isLogged();
  };

  //?Metodo que captura el username del usuario en sesion
  getUserName(){
    return this.LogUser.getName();
  };

  //?Metodo que finaliza la sesion activa 
  onLogout(){
    return this.LogUser.logout();
  };

}

