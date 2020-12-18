import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'flickr';
  urlImages: {} = [];
  view: string;

  forwardUrls(urlImages: {}): void {
    this.urlImages = urlImages;
  }
  forwardView(view: string): void {
    this.view = view;
  }
}
