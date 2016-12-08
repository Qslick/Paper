import { Component, OnInit } from '@angular/core';
import { AngularFire} from "angularfire2";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {


  user;

  constructor(public af: AngularFire) {
    this.af.auth.subscribe(user =>{
      if(user){
        this.user = user;
      }
      else{
        // user = null;
      }
      console.log("User: "+this.user);
    });

  }



  ngOnInit(){}
}
