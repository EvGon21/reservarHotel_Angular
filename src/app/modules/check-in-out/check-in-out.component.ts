import { Component } from '@angular/core';


@Component({
  selector: 'app-check-in-out',
  templateUrl: './check-in-out.component.html',
  styleUrls: ['./check-in-out.component.css']
})

export class CheckInOutComponent {
  checkInDate: string = "";
  checkOutDate: string ="";
  numGuests: string = "";

  numAdults: string[] = ['Huesped(s)','0','1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

  constructor() { }

  ngOnInit(): void {
  }
}
