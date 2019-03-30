import {Component, OnInit} from '@angular/core';
import {StartupService} from '../startup.service';
import {Observable} from 'rxjs';
import {Startup} from '../models/startup.models';

@Component({
  selector: 'l3co-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  startup$: Observable<Startup[]>;

  constructor(private service: StartupService) {
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
}
