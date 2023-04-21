import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
export class AlertService {

  constructor() { }
  showAlert(name : string) : boolean{
    return confirm(name);
  }
}
