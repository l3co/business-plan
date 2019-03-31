import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import {MatSnackBar} from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private afAuth: AngularFireAuth, private snackBar: MatSnackBar) {
  }

  getUserAuthenticated() {
    return localStorage.getItem('user_id');
  }

  getMailFromUserAuthenticated() {
    return localStorage.getItem('user_mail');
  }

  userEmpty(): boolean {
    const userId = localStorage.getItem('user_id');
    return userId === null || userId === undefined;
  }


  doFacebookLogin() {
    return new Promise<any>((resolve, reject) => {
      const provider = new firebase.auth.FacebookAuthProvider();
      this.afAuth.auth
        .signInWithPopup(provider)
        .then(res => {
          this.setLocalStorage(res);
          resolve(res);
        }, err => {
          console.log(err);
          this.showMessage(err);
          reject(err);
        });
    });
  }

  doGithubLogin() {
    return new Promise<any>((resolve, reject) => {
      const provider = new firebase.auth.GithubAuthProvider();
      this.afAuth.auth
        .signInWithPopup(provider)
        .then(res => {
          this.setLocalStorage(res);
          resolve(res);
        }, err => {
          console.log(err);
          this.showMessage(err);
          reject(err);
        });
    });
  }

  doTwitterLogin() {
    return new Promise<any>((resolve, reject) => {
      const provider = new firebase.auth.TwitterAuthProvider();
      this.afAuth.auth.signInWithPopup(provider)
        .then(res => {
          this.setLocalStorage(res);
          resolve(res);
        }, err => {
          console.log(err);
          reject(err);
        });
    });
  }

  private setLocalStorage(res) {
    localStorage.setItem('user_id', res.user.uid);
    localStorage.setItem('user_mail', res.user.email);
  }

  doGoogleLogin() {

    return new Promise<any>((resolve, reject) => {
      const provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('profile');
      provider.addScope('email');
      this.afAuth.auth.signInWithPopup(provider)
        .then(res => {
          this.setLocalStorage(res);
          resolve(res);
        }, err => {
          console.log(err);
          this.showMessage(err);
          reject(err);
        });
    });
  }

  private showMessage(err) {
    if (err.code === 'auth/account-exists-with-different-credential') {
      this.snackBar.open('Já existe uma rede social associada ao aplicativo tente com outro diferente',
        'Undo',
        {
          duration: 5500,
        });
    }
  }

  doLogout() {
    return new Promise((resolve, reject) => {
      if (firebase.auth().currentUser) {
        this.afAuth.auth.signOut();
        localStorage.removeItem('user_id');
        resolve();
      } else {
        reject();
      }
    });
  }
}
