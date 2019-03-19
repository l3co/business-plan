import {Component, Input, OnInit} from '@angular/core';
import {Startup} from '../../models/startup.models';
import {StartupService} from '../../startup.service';

@Component({
  selector: 'l3co-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() startup: Startup;

  constructor(private service: StartupService) {
  }

  ngOnInit() {
  }

  totalInvestments(startup: Startup) {
    return this.service.totalInvestments(startup);
  }

  totalProvision(startup: Startup) {
    return this.service.totalProvision(startup);
  }

}
