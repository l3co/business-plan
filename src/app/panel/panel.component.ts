import {Component, OnInit} from '@angular/core';
import {StartupService} from '../startup.service';
import {Observable} from 'rxjs';
import {Startup} from '../models/startup.models';
import {BusinessComponent} from '../startup/business/business.component';
import {HelpComponent} from '../help/help.component';
import {MatDialog} from '@angular/material';
import {UserService} from '../user/user.service';

@Component({
  selector: 'l3co-dashboard',
  templateUrl: './panel.component.html'
})
export class PanelComponent implements OnInit {

  startup$: Observable<Startup[]>;

  constructor(private service: StartupService, private userService: UserService, private dialog: MatDialog) {
  }

  ngOnInit() {
    this.startup$ = this.service.listAllStartupByUserId();
  }

  totalInvestments(startup: Startup) {
    return this.service.totalInvestments(startup);
  }

  totalCosts(startup: Startup) {
    return this.service.totalCosts(startup);
  }

  createStartup() {
    this.dialog.open(BusinessComponent);
  }

  help() {
    this.dialog.open(HelpComponent, {width: '80%'});
  }

  logout() {
    return this.userService.doLogout();
  }

  hasUser() {
    return !this.userService.userEmpty();
  }
}
