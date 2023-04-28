import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @ViewChild('viewChildObject') viewChild!: ElementRef | undefined;
  @ContentChild('contentChildObject') contentChild!: ElementRef | undefined;

  public isDIsplay: boolean = true;

  constructor() {
    console.log(
      'view child innerHTML : - ' + this.viewChild?.nativeElement.innerHTML
    );
    console.log(
      'content child innerHTML : - ' +
        this.contentChild?.nativeElement.innerHTML
    );
  }

  public ngOnChanges(changes: SimpleChanges): void {
    console.log('Onchange run');
  }

  public ngOnInit(): void {
    console.log('OnInit run');
  }

  public ngDoCheck(): void {
    console.log('DoCheck run');
  }

  public ngAfterContentInit(): void {
    console.log('AfterContentInit run');
    console.log(
      'content child innerHTML : - ' +
        this.contentChild?.nativeElement.innerHTML
    );
  }

  public ngAfterContentChecked(): void {
    console.log('AfterContentChecked run');
  }

  public ngAfterViewInit(): void {
    console.log('AfterContentChecked run');
    console.log(
      'view child innerHTML : - ' + this.viewChild?.nativeElement.innerHTML
    );
  }

  public ngAfterViewChecked(): void {
    console.log('AfterViewChecked run');
  }

  public ngOnDestroy(): void {
    console.log('OnDestroy run');
  }
}
