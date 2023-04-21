import { Component } from '@angular/core';
import { IBookList } from '../interface/IBookList';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  public cards : IBookList[] = [
    {
      title: "Harry Potter and the Philosopher's Stone",
      author: 'JKRowling',
      text: 'here',
      price : "199.99",
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTntl6dP1vgF2__zJwnTAK-uUu5U_24LaSymmzXJ-Ty8BEhNNIiYjxMymk18f6LdhHSs30&usqp=CAU',
    },
    {
      title: "The Ink Black Heart",
      author: 'JKRowling',
      text: 'here',
      price : "199.99",
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTntl6dP1vgF2__zJwnTAK-uUu5U_24LaSymmzXJ-Ty8BEhNNIiYjxMymk18f6LdhHSs30&usqp=CAU',
    },
    {
      title: "Hamlet",
      author: 'WilliamShakespeare',
      text: 'here',
      price : "199.99",
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTntl6dP1vgF2__zJwnTAK-uUu5U_24LaSymmzXJ-Ty8BEhNNIiYjxMymk18f6LdhHSs30&usqp=CAU',
    },
    {
      title: "Julius Caesar",
      author: 'WilliamShakespeare',
      text: 'here',
      price : "199.99",
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTntl6dP1vgF2__zJwnTAK-uUu5U_24LaSymmzXJ-Ty8BEhNNIiYjxMymk18f6LdhHSs30&usqp=CAU',
    },
    {
      title: "The Sisters",
      author: 'JamesJoyce',
      text: 'here',
      price : "199.99",
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTntl6dP1vgF2__zJwnTAK-uUu5U_24LaSymmzXJ-Ty8BEhNNIiYjxMymk18f6LdhHSs30&usqp=CAU',
    },
  ];

  authorFilter = "";
}
