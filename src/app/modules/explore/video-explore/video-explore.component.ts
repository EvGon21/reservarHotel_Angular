import { Component, ViewChild } from '@angular/core';
import { PlyrComponent } from 'ngx-plyr';
import Plyr from 'plyr';

@Component({
  selector: 'app-video-explore',
  templateUrl: './video-explore.component.html',
  styleUrls: ['./video-explore.component.css']
})
export class VideoExploreComponent {
    // get the component instance to have access to plyr instance
    @ViewChild(PlyrComponent)
    plyr!: PlyrComponent;
  
    // or get it from plyrInit event
    player!: Plyr;
  
    videoSources: Plyr.Source[] = [
      {
        src: 'https://www.youtube.com/watch?v=rGx310iRHBo',
        provider: 'youtube',
      },
    ];
  
    played(event: any) {
      console.log('played', event);
    }
}
