
import {Injectable} from "@angular/core";
import {CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {AngularFire} from "angularfire2";
import {ProfileComponent} from "./profile/profile.component";

@Injectable()
export class AuthGuard implements CanActivate {

  user;
  constructor(public af: AngularFire, private router: Router){
    af.auth.subscribe(user =>{
      if (user) {
        this.user = user;
      } else {}
    });
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if (this.user.auth.uid){
      this.router.navigate(["./profile"]);
      return true;
    }
  }

}
