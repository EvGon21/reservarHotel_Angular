import { Component } from '@angular/core';
import * as $ from 'jquery';
import * as Masonry from 'masonry-layout';

@Component({
  selector: 'app-room-types',
  templateUrl: './room-types.component.html',
  styleUrls: ['./room-types.component.css']
})
export class RoomTypesComponent {
  images = [
    { url: '../../../../assets/imgs/rooms/room1.jpg' },
    { url: '../../../../assets/imgs/rooms/room2.jpg' },
    { url: '../../../../assets/imgs/rooms/room3.jpg' },
    { url: '../../../../assets/imgs/rooms/room4.jpg' },
    { url: '../../../../assets/imgs/rooms/room5.jpg' },
    { url: '../../../../assets/imgs/rooms/room6.jpg' },
    { url: '../../../../assets/imgs/rooms/room7.jpg' },
    { url: '../../../../assets/imgs/rooms/room8.jpg' },
    { url: '../../../../assets/imgs/rooms/room3.jpg' }
  ];
  
  ngAfterViewInit() {
    var grid = document.querySelector('.grid');
    if (grid) {
      var msnry = new Masonry(grid, {
        itemSelector: '.grid-item',
        columnWidth: '.grid-sizer',
        percentPosition: true
      });
    }
  }
  
}
