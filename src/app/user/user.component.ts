import {Component, OnInit} from '@angular/core';
import {User} from '../models/user.models';
import {UserService} from '../user.service';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'l3co-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user: User = {id: '', name: '', mail: '', password: ''};

  logoutStatus = false;
  logoutText = 'Logout';

  constructor(private snackBar: MatSnackBar, private service: UserService) {
  }

  ngOnInit() {
  }

  saveUser() {

  }

  logout() {
    if (this.logoutStatus) {
      this.service.create(this.user)
        .then(() => {
          this.snackBar.open('Usuário criado com sucesso', 'Undo', {
            duration: 2000,
          });
          this.deactivateLogout();
        });
    } else {
      this.activateLogout();
      return;
    }
  }

  login() {

    if (this.logoutStatus) {
      this.deactivateLogout();
      return;
    } else {
      this.service.authentication(this.user);
    }
  }

  private deactivateLogout() {
    this.logoutStatus = false;
    this.logoutText = 'Logout';
  }

  private activateLogout() {
    this.logoutText = 'Registrar usuário';
    this.logoutStatus = true;
  }
}
