import { outputAst } from '@angular/compiler';
import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { IAuthorFilter } from '../interface/IAuthorFilter';
import { FilterService } from '../services/filter/filter.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit, OnDestroy {
  constructor(private filterService: FilterService) {}

  public authorFilter!: IAuthorFilter[];

  private subscription: Subscription | undefined;

  ngOnInit(): void {
    this.subscription = this.filterService.filterSubject$.subscribe(
      (filter) => {
        this.authorFilter = filter;
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
    this.subscription = undefined;
  }

  public changeFilter(ind: number): void {
    this.authorFilter[ind].check = !this.authorFilter[ind].check;
    this.filterService.setFilter(this.authorFilter);
  }
}
