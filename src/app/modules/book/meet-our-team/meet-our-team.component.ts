import { Component } from '@angular/core';
import { faFacebook, faInstagram, faTwitter} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-meet-our-team',
  templateUrl: './meet-our-team.component.html',
  styleUrls: ['./meet-our-team.component.css']
})
export class MeetOurTeamComponent {
  faInstagram = faInstagram;
  faFacebook = faFacebook;
  faTwitter = faTwitter;
  
}
