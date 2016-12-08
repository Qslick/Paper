/**
 * Created by Quinn on 12/6/2016.
 */
import { ModuleWithProviders } from '@angular/core';
import { Routers, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ProfileComponent} from "./profile/profile.component";


export const router: Routers = [
  { path: '', component: HomeComponent},
  { path: 'profile', component: ProfileComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
