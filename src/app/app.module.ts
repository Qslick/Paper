import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {AngularFireModule, AuthProviders, AuthMethods} from "angularfire2";

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { PaperPreviewComponent } from './paper-preview/paper-preview.component';
import { ProfileComponent } from './profile/profile.component';
import {routes} from "./routing/app.router";
import { PageNotFounComponent } from './page-not-foun/page-not-foun.component';
import {AuthGuard} from "./auth-guard";


export const firebaseConfig = {
  apiKey: 'AIzaSyC3XA_yH8ONbOBelago3JV8DEIAGZbk490',
  authDomain: 'evitan-b7e5d.firebaseapp.com',
  databaseURL: 'https://evitan-b7e5d.firebaseio.com',
  storageBucket: 'evitan-b7e5d.appspot.com'
};

const myFirebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Redirect
}

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    PaperPreviewComponent,
    ProfileComponent,
    PageNotFounComponent
  ],
  imports: [
    AlertModule,
    NgbModule.forRoot(),
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig),
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [
    AuthGuard,
    // CanActivateViaAuthGuard
  ],
  // provider: AuthProviders.Google,
  // method: AuthMethods.Popup,
  bootstrap: [AppComponent]
})
export class AppModule { }
