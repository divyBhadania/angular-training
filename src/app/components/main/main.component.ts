import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  public card = {
    title : "hello",
    text : "here",
    img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTntl6dP1vgF2__zJwnTAK-uUu5U_24LaSymmzXJ-Ty8BEhNNIiYjxMymk18f6LdhHSs30&usqp=CAU"
  }
}
