import {Component, OnInit} from '@angular/core';
import {UserService} from './user/user.service';
import {HelpComponent} from './help/help.component';
import {MatDialog} from '@angular/material';
import {BusinessComponent} from './startup/business/business.component';

@Component({
  selector: 'l3co-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private service: UserService, private dialog: MatDialog) {
  }

  ngOnInit(): void {

  }

  hasUser() {
    return !this.service.userEmpty();
  }

  createStartup() {
    this.dialog.open(BusinessComponent);
  }

  help() {
    this.dialog.open(HelpComponent, {width: '80%'});
  }

  logout() {
    return this.service.doLogout();
  }
}
