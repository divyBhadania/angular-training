import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//module
import { CommonErrorModuleModule } from './common-error/common-error.module';

//component
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

//service
import { AlertService } from './common-error/alert.service';
import { ComponentTaskModule } from './component-task/component-task.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CoreModule,
    CommonErrorModuleModule,
    ComponentTaskModule,
  ],
  providers: [AlertService],
  bootstrap: [AppComponent],
})
export class AppModule {}
