import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public navLinkList = [
    { tiltle: 'Dashboard', link: '#' },
    { tiltle: "Today's Deal", link: '#' },
    { tiltle: 'Mobile', link: '#' },
    { tiltle: 'Electronics', link: '#' },
    { tiltle: 'Customer service', link: '#' },
    { tiltle: 'About', link: '#' },
  ];
}
