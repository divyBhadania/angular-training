import { Component } from '@angular/core';
import { AlertService } from '../alert.service';

@Component({
  selector: 'app-error-one',
  templateUrl: './error-one.component.html',
  styleUrls: ['./error-one.component.scss'],
})
export class ErrorOneComponent {
  constructor(private alertService: AlertService) {}

  showAlert() {
    this.alertService.showAlert();
  }
}
