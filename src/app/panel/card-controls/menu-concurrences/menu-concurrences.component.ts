import {Component, Input, OnInit} from '@angular/core';
import {Startup} from '../../../models/startup.models';
import {MatDialog} from '@angular/material';
import {CreateConcurrencesComponent} from '../../../startup/concurrences/create-concurrences-dialog/create-concurrences.component';
import {ListConcurrencesDialogComponent} from '../../../startup/concurrences/list-concurrences-dialog/list-concurrences-dialog.component';

@Component({
  selector: 'l3co-menu-concurrences',
  templateUrl: './menu-concurrences.component.html',
  styleUrls: ['./menu-concurrences.component.scss']
})
export class MenuConcurrencesComponent implements OnInit {

  @Input() startup: Startup;

  constructor(private dialog: MatDialog) {
  }

  ngOnInit() {
  }

  createConcurrences(item: Startup) {
    this.dialog.open(CreateConcurrencesComponent, {
      data: item
    });
  }

  listConcurrences(item: Startup) {
    this.dialog.open(ListConcurrencesDialogComponent, {
      data: item
    });
  }
}
