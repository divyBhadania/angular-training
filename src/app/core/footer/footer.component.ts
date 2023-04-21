import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  public email : string = "";
  public date = new Date().getFullYear();

  public addressList = [
    {
      country : "India  (HQ)",
      img : "https://raw.githubusercontent.com/lipis/flag-icons/1734912defc091ebaa46d46fdacd564425e643c0/flags/4x3/in.svg",
      address : "Lorem ipsum dolor sit amet."
    },
    {
      country : "Australia",
      img : "https://raw.githubusercontent.com/lipis/flag-icons/1734912defc091ebaa46d46fdacd564425e643c0/flags/4x3/au.svg",
      address : "Lorem ipsum dolor sit amet."
    },
    {
      country : "US",
      img : "https://raw.githubusercontent.com/lipis/flag-icons/1734912defc091ebaa46d46fdacd564425e643c0/flags/4x3/us.svg",
      address : "Lorem ipsum dolor sit amet."
    },
    {
      country : "UK",
      img : "https://raw.githubusercontent.com/lipis/flag-icons/1734912defc091ebaa46d46fdacd564425e643c0/flags/4x3/gb.svg",
      address : "Lorem ipsum dolor sit amet."
    },
    {
      country : "Canada",
      img : "https://raw.githubusercontent.com/lipis/flag-icons/1734912defc091ebaa46d46fdacd564425e643c0/flags/4x3/ca.svg",
      address : "Lorem ipsum dolor sit amet."
    }
  ]

  public footerLinkList = ["About Us" , "Contact Us" , "Terms of Services" , "Privacy Policy"]
}
