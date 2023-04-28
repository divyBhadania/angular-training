import { Component, OnDestroy, OnInit } from '@angular/core';
import { IBook } from '../interface/IBookList';
import { Subscription } from 'rxjs';
import { FilterService } from '../services/filter/filter.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit, OnDestroy {
  public bookList: IBook[] = [
    {
      title: "Harry Potter and the Philosopher's Stone",
      author: 'JKRowling',
      text: 'here',
      price: '199.99',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTntl6dP1vgF2__zJwnTAK-uUu5U_24LaSymmzXJ-Ty8BEhNNIiYjxMymk18f6LdhHSs30&usqp=CAU',
      isFiltered: true,
    },
    {
      title: 'The Ink Black Heart',
      author: 'JKRowling',
      text: 'here',
      price: '199.99',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTntl6dP1vgF2__zJwnTAK-uUu5U_24LaSymmzXJ-Ty8BEhNNIiYjxMymk18f6LdhHSs30&usqp=CAU',
      isFiltered: true,
    },
    {
      title: 'Hamlet',
      author: 'WilliamShakespeare',
      text: 'here',
      price: '199.99',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTntl6dP1vgF2__zJwnTAK-uUu5U_24LaSymmzXJ-Ty8BEhNNIiYjxMymk18f6LdhHSs30&usqp=CAU',
      isFiltered: true,
    },
    {
      title: 'Julius Caesar',
      author: 'WilliamShakespeare',
      text: 'here',
      price: '199.99',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTntl6dP1vgF2__zJwnTAK-uUu5U_24LaSymmzXJ-Ty8BEhNNIiYjxMymk18f6LdhHSs30&usqp=CAU',
      isFiltered: true,
    },
    {
      title: 'The Sisters',
      author: 'JamesJoyce',
      text: 'here',
      price: '199.99',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTntl6dP1vgF2__zJwnTAK-uUu5U_24LaSymmzXJ-Ty8BEhNNIiYjxMymk18f6LdhHSs30&usqp=CAU',
      isFiltered: true,
    },
  ];

  private subscription: Subscription | undefined;

  constructor(private filterService: FilterService) {}

  ngOnInit(): void {
    this.subscription = this.filterService.filterSubject$.subscribe(
      (filter) => {
        if (filter.filter((x) => x.check == false).length != filter.length) {
          filter.forEach((element) => {
            this.bookList
              .filter((x) => x.author == element.name)
              .forEach((b) => (b.isFiltered = element.check));
          });
        } else {
          this.bookList.forEach((x) => (x.isFiltered = true));
        }
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
    this.subscription = undefined;
  }
}
