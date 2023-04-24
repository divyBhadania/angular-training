import { Component, EventEmitter } from '@angular/core';
import { IBook } from '../interface/IBookList';
import { IAuthorFilter } from '../interface/IAuthorFilter';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  private allAuthorFlag: boolean = false;
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

  public updateBookList(event: IAuthorFilter[]): void {
    if (event.filter((x) => x.check == false).length != event.length) {
      event.forEach((element) => {
        this.bookList
          .filter((x) => x.author == element.name)
          .forEach((b) => (b.isFiltered = element.check));
      });
    } else {
      this.bookList.forEach((x) => (x.isFiltered = true));
    }
  }
}
