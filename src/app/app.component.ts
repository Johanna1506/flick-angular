import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'flickr';
  urlImages: {} = [];

  forwardUrls(urlImages: {}): void {
    this.urlImages = urlImages;
  }
}
