import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//component
import { ErrorOneComponent } from './error-one/error-one.component';

//module
import { FormsModule } from '@angular/forms';
import { ErrorTwoComponent } from './error-two/error-two.component';
import { ErrorThreeComponent } from './error-three/error-three.component';



@NgModule({
  declarations: [
    ErrorOneComponent,
    ErrorTwoComponent,
    ErrorThreeComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports : [ErrorOneComponent]
})
export class CommonErrorModuleModule { }
