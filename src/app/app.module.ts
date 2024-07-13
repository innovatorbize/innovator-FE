import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthRoutingModule } from './core/auth/auth.routing';
import { LoginService } from './login.service';
import { LocalStorageService } from './core/services/local-stroage.service';
import { HttphandlerService } from './core/httphandler.service';
import { HttpClientModule } from '@angular/common/http';
import { MasterRoutingModule } from './core/masters/masters.routing';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AuthRoutingModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MasterRoutingModule
  ],
  providers: [
    provideClientHydration(), 
    LoginService,
    LocalStorageService,
    HttphandlerService,
    provideAnimationsAsync(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
