import { Component } from '@angular/core';


@Component({
  selector: 'app-check-in-out',
  templateUrl: './check-in-out.component.html',
  styleUrls: ['./check-in-out.component.css']
})
export class CheckInOutComponent {
  checkInDate: string = "";
  checkOutDate: string ="";
  numGuests: number = 0;

  constructor() { }

  ngOnInit(): void {
  }
}
