import {Injectable} from '@angular/core';
import {MatDialog} from '@angular/material';
import {ConfirmDialogComponent} from '../components/templates/confirm-dialog/confirm-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private dialog: MatDialog) {
  }

  show(title: string, message: any) {
    const width = window.innerWidth > 1000 ? '400px' : '250px';
    this.dialog.open(ConfirmDialogComponent, {
      width,
      data: {
        title,
        message,
        showCancel: false
      }
    });
  }

  close() {
    this.dialog.closeAll();
  }

}
