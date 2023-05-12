import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-check-in-out',
  templateUrl: './check-in-out.component.html',
  styleUrls: ['./check-in-out.component.css']
})

export class CheckInOutComponent {
  
  checkInDate: Date;
  checkOutDate: Date;
  numGuests: string = "";
  name: string = "";
  checkInTime: string = "16:00";
  checkOutTime: string = "11:00";
  reservationIn: string = "";
  reservationOut: string = "";
  array1: any[] = [];
  array2: any[] = [];
  array3: any[] = [];
  array4: any[] = [];
  array5: any[] = [];
  array6: any[] = [];
  numAdults: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
  band: number = 0;
  
  constructor() { 
    this.checkInDate = new Date();
    this.checkOutDate = new Date();


   
  }

  ngOnInit(): void {
   
  }

  onSubmit() {

    
    const date = new Date();
    const year = date.getFullYear();
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const day = ("0" + date.getDate()).slice(-2);
    const formattedDate = `${year}-${month}-${day}`;
    const checkInDateString = this.checkInDate.toLocaleString();
    const checkOutDateString = this.checkOutDate.toLocaleString();


    
  if(this.array1.length == 0){
    this.band = 0;
  }else{
    const array1Str = localStorage.getItem('checkIn');
    if (array1Str) {
      this.array1 = JSON.parse(array1Str);
      //console.log(this.array1[0]);
      //console.log(this.array1[2]);
    }
    const array2Str = localStorage.getItem('checkOut');
    if (array2Str) {
      this.array2 = JSON.parse(array2Str);
    }

    if (checkInDateString < formattedDate || checkOutDateString < formattedDate) {
      
      this.band =1;
    }else if(checkInDateString >= checkOutDateString){
      this.band =2;
    }else{
      for (let i = 0; i <= this.array1.length; i++) {
        if(checkInDateString >= this.array1[i] && checkInDateString < this.array2[i]){
          this.band=3;
          break;
        }else if(checkOutDateString > this.array1[i] && checkOutDateString <= this.array2[i]){
          this.band=4;
          break;
        }else if(checkInDateString < this.array1[i] && checkOutDateString > this.array2[i] ){
          this.reservationIn = this.array1[i];
          this.reservationOut = this.array2[i];
          this.band=5;
          break;
        }
        
      }
    }

  }
    switch(this.band){
      case 0:  
      this.array1.push(checkInDateString);
      this.array2.push(checkOutDateString);
      this.array3.push(this.checkInTime);
      this.array4.push(this.checkOutTime);
      this.array5.push(this.name);
      this.array6.push(this.numGuests);
  
      localStorage.setItem('checkIn', JSON.stringify(this.array1));
      localStorage.setItem('checkOut', JSON.stringify(this.array2));
      localStorage.setItem('checkInTime', JSON.stringify(this.array3));
      localStorage.setItem('checkOutTime', JSON.stringify(this.array4));
      localStorage.setItem('name', JSON.stringify(this.array5));
      localStorage.setItem('numGuests', JSON.stringify(this.array6)); 
      alert(`Check-in date: ${checkInDateString}\nCheck-out date: ${checkOutDateString}`);
      break;
      case 1:  alert("Las fechas deben ser posteriores a la fecha actual"); break;
      case 2:  alert("Esa combiancion de fechas no es posible"); break;
      case 3:  alert("Fecha de entrada ocupada"); break;
      case 4:  alert("Fecha de salida ocupada");break;
      case 5:   alert("Hay una reservacion en tu rango de fechas es esta: " +this.reservationIn+ " a "+this.reservationOut ); break;

    }
   

  
}
}
