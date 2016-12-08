

import {PageNotFounComponent} from "../page-not-foun/page-not-foun.component";
import {ProfileComponent} from "../profile/profile.component";
import {HomeComponent} from "../home/home.component";
import {ModuleWithProviders} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {profileRouter} from "./profileRouting";

export const router: Routes = [
  { path: '', component: HomeComponent},
  // { path: 'profile' , component: ProfileComponent},
    ...profileRouter,
  { path: '**', component: PageNotFounComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
