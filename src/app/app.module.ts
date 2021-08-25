import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { MsalModule, MsalService, MSAL_INSTANCE } from '@azure/msal-angular';
import { IPublicClientApplication, PublicClientApplication } from '@azure/msal-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { environment } from '../environments/environment';
import { MaslGuard } from './services/masl/masl.guard';

export function MSALInterface(): IPublicClientApplication{
  return new PublicClientApplication({
    auth:{
      clientId: `${environment.idAppAzure}`, //! --> Se debe asignar la variable de entorno de la aplicacion
      // ? authority: --> "Se habilita si la app requeire single-tenant" 
    }
  })
}

const routers: Routes = [
  {path: '', component: LoginComponent, canActivate: [MaslGuard]},
  {path: '**', redirectTo:'/', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    MsalModule,
    RouterModule.forRoot(routers)
  ],
  providers: [   
    {
      provide: MSAL_INSTANCE,
      useFactory: MSALInterface
    },
    MsalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
