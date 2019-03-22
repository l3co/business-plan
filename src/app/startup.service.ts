import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Injectable} from '@angular/core';
import {Startup} from './models/startup.models';
import {Observable} from 'rxjs';
import {UserService} from './user.service';

@Injectable({providedIn: 'root'})
export class StartupService {

  startup$: AngularFirestoreCollection<Startup>;

  constructor(private db: AngularFirestore, private userService: UserService) {
    this.bootstrapFirestore();
  }

  private bootstrapFirestore() {
    this.startup$ = this.db.collection<Startup>('/startup');
  }

  create(startup: Startup): Promise<void> {
    const id: string = this.db.createId();
    startup.uid = id;
    startup.user_id = this.userService.getUserAuthenticated();
    return this.startup$.doc<Startup>(id).set(startup);
  }

  listAll(): Observable<Startup[]> {

    return this.db
      .collection<Startup>('startup', ref =>
        ref.where('user_id', '==', this.userService.getUserAuthenticated()))
      .valueChanges();

  }

  totalInvestments(startup: Startup): number {
    return startup.investments
      .map(value => value.value)
      .reduce((prev, value) => prev + value, 0);
  }

  totalProvision(startup: Startup): number {
    return startup.provision
      .map(value => value.value)
      .reduce((prev, value) => prev + value, 0);
  }

  update(data: Startup) {
    return this
      .startup$
      .doc<Startup>(data.uid)
      .update(data);
  }
}
