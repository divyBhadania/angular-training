import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//module
import { FormsModule } from '@angular/forms';

//Component
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BookCardComponent } from './book-card/book-card.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BookListComponent } from './book-list/book-list.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    BookCardComponent,
    MainComponent,
    SidebarComponent,
    BookListComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    HeaderComponent,
    FooterComponent,
    BookCardComponent,
    MainComponent,
    SidebarComponent,
  ],
})
export class CoreModule {}
