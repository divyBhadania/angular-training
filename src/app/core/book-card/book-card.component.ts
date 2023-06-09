import { Component, Input } from '@angular/core';
import { IBook } from '../interface/IBookList';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
})
export class BookCardComponent {
  @Input() card!: IBook;
}
