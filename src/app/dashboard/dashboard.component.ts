import {Component, OnInit} from '@angular/core';
import {StartupService} from '../startup.service';
import {Observable} from 'rxjs';
import {Startup} from '../models/startup.models';

@Component({
  selector: 'l3co-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  startup$: Observable<Startup[]>;

  constructor(private service: StartupService) {
  }

  ngOnInit() {
    this.startup$ = this.service.listAll();
  }
}
