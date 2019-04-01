import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'l3co-help',
  templateUrl: './help.component.html'
})
export class HelpComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<HelpComponent>) {
  }

  ngOnInit() {
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
