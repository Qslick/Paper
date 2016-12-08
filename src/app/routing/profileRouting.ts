import {ProfileComponent} from "../profile/profile.component";
import { AuthGuard } from "../auth-guard";

export const profileRouter = [
  { path: 'profile', children:[
    { path: '', component: ProfileComponent },
    { path: ':id', component: ProfileComponent }
  ], canActivate: [AuthGuard]}
];

// export const routes: ModuleWithProviders = RouterModule.forRoot(router);
