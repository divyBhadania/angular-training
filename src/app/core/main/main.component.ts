import { Component, EventEmitter, ViewChild } from '@angular/core';
import { IBook } from '../interface/IBookList';
import { IAuthorFilter } from '../interface/IAuthorFilter';
import { BookListComponent } from '../book-list/book-list.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  @ViewChild(BookListComponent) bookListChild!: BookListComponent;

  public updateBookList(authorfilter: IAuthorFilter[]): void {
    this.bookListChild.updateFilter(authorfilter);
  }
}
