import { Component } from '@angular/core';

@Component({
  selector: 'app-side-bar-component',
  templateUrl: './side-bar-component.component.html',
  styleUrls: ['./side-bar-component.component.css']
})
export class SideBarComponentComponent {
  numChildren: string[] = ['Child(ren)','0','1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
  numAdults: string[] = ['Adult(s)','0','1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
}
