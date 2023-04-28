import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { IAuthorFilter } from '../../interface/IAuthorFilter';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  private _authorFilter: IAuthorFilter[] = [
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

  private _filterSubject: BehaviorSubject<IAuthorFilter[]> =
    new BehaviorSubject<IAuthorFilter[]>(this._authorFilter);

  get filterSubject$() {
    return this._filterSubject.asObservable();
  }

  setFilter(authorFilter: IAuthorFilter[]) {
    this._authorFilter = authorFilter;
    this._filterSubject.next(this._authorFilter);
  }
}
