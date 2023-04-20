import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorOneComponent } from './error-one/error-one.component';



@NgModule({
  declarations: [
    ErrorOneComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [ErrorOneComponent]
})
export class CommonErrorModuleModule { }
