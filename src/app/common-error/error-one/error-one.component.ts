import { Component } from '@angular/core';
import { AlertService } from '../alert.service';

@Component({
  selector: 'app-error-one',
  templateUrl: './error-one.component.html',
  styleUrls: ['./error-one.component.scss'],
})
export class ErrorOneComponent {
  constructor(private alertService: AlertService) {}
  userName :string = "";
  nameList : string[] = [];
  addName() : void{
    this.nameList.push(this.userName);
  }

  deleteName(index : number) : void {
    this.alertService.showAlert(this.nameList[index]);
    this.nameList.splice(index , 1);
  }
}
