import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {User} from './models/user.models';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user$: AngularFirestoreCollection<User>;

  private bootstrapFirestore() {
    this.user$ = this.db.collection<User>('/users');
  }

  constructor(private db: AngularFirestore) {
    this.bootstrapFirestore();
  }

  create(user: User): Promise<void> {
    const id: string = this.db.createId();
    user.id = id;
    return this.user$.doc<User>(id).set(user);
  }

  update(user: User): Promise<void> {
    return this.user$.doc<User>(user.id).update(user);
  }

  getById(id: string): Observable<User> {
    return this.user$.doc<User>(id).valueChanges();
  }

  getUserAuthenticated(): string {
    return localStorage.getItem('user_id');
  }

  authentication(user: User): boolean {
    let hasUser = false;
    this.db
      .collection<User>('users',
        ref => ref.where('mail', '==', user.mail)
          .where('password', '==', user.password))
      .valueChanges()
      .subscribe(value => {
          if (this.checkResultValue(value)) {
            localStorage.setItem('user_id', value[0].id);
            hasUser = true;
          }
        }
      );
    return hasUser;
  }

  private checkResultValue(value) {
    return value !== null && value !== undefined;
  }

  userEmpty(): boolean {
    const userId = localStorage.getItem('user_id');
    return userId === null || userId === undefined;
  }

  logout() {
    localStorage.removeItem('user_id');
  }
}
