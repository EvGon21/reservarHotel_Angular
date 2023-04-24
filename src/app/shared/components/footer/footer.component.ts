import { Component } from '@angular/core';
import {faThumbsUp, faClockFour} from '@fortawesome/free-regular-svg-icons';
import {faPiggyBank} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  faThumbsUp = faThumbsUp;
  faClockFout = faClockFour;
  faPiggyBank = faPiggyBank;
}
