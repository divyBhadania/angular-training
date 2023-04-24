import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Output } from '@angular/core';
import { IAuthorFilter } from '../interface/IAuthorFilter';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  @Output() filterOutput: EventEmitter<IAuthorFilter[]> = new EventEmitter();

  public authorFilter: IAuthorFilter[] = [
    {
      name: 'JKRowling',
      label: 'JKRowling',
      check: false,
    },
    {
      name: 'WilliamShakespeare',
      label: 'William Shakespeare',
      check: false,
    },
    {
      name: 'JamesJoyce',
      label: 'James Joyce',
      check: false,
    },
  ];

  public changeFilter(ind: number): void {
    this.authorFilter[ind].check = !this.authorFilter[ind].check;
    this.filterOutput.emit(this.authorFilter);
  }
}
