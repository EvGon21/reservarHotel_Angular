import { Component } from '@angular/core';


@Component({
  selector: 'app-table-reserved',
  templateUrl: './table-reserved.component.html',
  styleUrls: ['./table-reserved.component.css']
})
export class TableReservedComponent {
 
 displayedColumns: string[] = ['name', 'num', 'checkIn', 'checkOut', 'timeIn', 'timeOut'];

 dataSource: { num: any, name: any, checkIn: any, checkOut: any, timeIn: any, timeOut: any }[] = [];


  constructor() {
    
    let checkIn = JSON.parse(localStorage.getItem('checkIn') ?? '[]');
let checkOut = JSON.parse(localStorage.getItem('checkOut') ?? '[]');
let checkInTime = JSON.parse(localStorage.getItem('checkInTime') ?? '[]');
let checkOutTime = JSON.parse(localStorage.getItem('checkOutTime') ?? '[]');
let name = JSON.parse(localStorage.getItem('name') ?? '[]');
let numGuests = JSON.parse(localStorage.getItem('numGuests') ?? '[]');


let combinedArray = [];
for (let i = 0; i < checkIn.length; i++) {
  combinedArray.push({
    name: name[i],
    num: numGuests[i],
    checkIn: checkIn[i],
    checkOut: checkOut[i],
    timeIn: checkInTime[i],
    timeOut: checkOutTime[i]
  });
}


this.dataSource = combinedArray;
    
  }
}
