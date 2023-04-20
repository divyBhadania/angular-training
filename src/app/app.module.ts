import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//module
import { CommonErrorModuleModule } from './common-error/common-error.module';

//component
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

//service
import { AlertService } from './common-error/alert.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    CommonErrorModuleModule
  ],
  providers: [AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
