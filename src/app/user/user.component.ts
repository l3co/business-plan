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

  singUpStatus = false;

  constructor(private snackBar: MatSnackBar, private service: UserService) {
  }

  ngOnInit() {
  }

  singUp() {
    if (this.singUpStatus) {
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

    if (this.singUpStatus) {
      this.deactivateLogout();
      return;
    } else {
      this.service.authentication(this.user);
    }
  }

  private deactivateLogout() {
    this.singUpStatus = false;
  }

  private activateLogout() {
    this.singUpStatus = true;
  }
}
