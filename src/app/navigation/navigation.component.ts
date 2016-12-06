import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable, AuthProviders, AuthMethods} from 'angularfire2';
// import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  provider: AuthProviders.Google,
  method: AuthMethods.Popup

})
export class NavigationComponent implements OnInit {

users: FirebaseListObservable<any[]>;

  user;
  uid;
  name;
  email;
  profileUrl;

  constructor(public af: AngularFire) {
    // this.users = af.database.list('/users/');
    this.af.auth.subscribe(user => {
      if(user){
        this.user = user;
        console.log("User logged in uid: "+this.user.uid);
        this.uid = this.user.uid;
        this.name = this.user.google.displayName;
        this.email = this.user.google.email;
        this.profileUrl = this.user.google.photoURL;

        this.dbInit();

        // const userData = af.database.object('/users/'+this.uid);
        // // userData.set({name: this.name});
        //
        // userData.set({
        //   email: this.email,
        //   name: this.name,
        //   photoUrl: this.profileUrl
        // });
      }
      else {
        this.user = null;
        this.uid=0;
        this.name="";
      }
    });
  }

  public dbInit(){
     const userData = this.af.database.object('/users/'+this.uid+'/user_data');
     // userData.set({name: this.name});

     userData.set({
       name: this.name,
       email: this.email,
       photoUrl: this.profileUrl
     });
   }


//   firebase.database().ref('users/' + userId).set({
//   username: name,
//   email: email,
//   profile_picture : imageUrl
// });

  googleLogin(){
    console.log("Button Clicked");
    this.af.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup
    });
    console.log(this.af.auth.getAuth());
  }


  logout() {
    this.af.auth.logout();
    console.log(this.af.auth.getAuth());
  }
  ngOnInit() {
  }


}
