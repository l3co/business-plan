import {Component, OnInit} from '@angular/core';
import {StartupService} from '../startup.service';
import {Observable} from 'rxjs';
import {Startup} from '../models/startup.models';
import {MatDialog} from '@angular/material';
import {BusinessComponent} from '../startup/business/business.component';
import {HelpComponent} from '../help/help.component';

@Component({
  selector: 'l3co-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  startup$: Observable<Startup[]>;

  constructor(private service: StartupService, private dialog: MatDialog) {
  }

  ngOnInit() {
    this.startup$ = this.service.listAll();
  }

  createStartup() {
    this.dialog.open(BusinessComponent);
  }

  help() {
    this.dialog.open(HelpComponent, {width: '40%'});
  }
}
