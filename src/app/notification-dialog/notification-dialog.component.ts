import { Component } from '@angular/core';

@Component({
  selector: 'app-notification-dialog',
  templateUrl: './notification-dialog.component.html',
  styleUrls: ['./notification-dialog.component.css']
})
export class NotificationDialogComponent {

  flowResumed: boolean = false;

  showAlert(): void {
    // Exibe o alerta e interrompe o fluxo até o fechamento
    window.alert('aaa');
    // Após o fechamento, o fluxo é retomado
    this.flowResumed = true;
  }
}
