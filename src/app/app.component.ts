import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'flickr';
  urlImages: string[];
  idImages: string[];
  view: string;

  forwardUrls(urlImages: string[]): void {
    this.urlImages = urlImages;
  }

  forwardIds(idImages: string[]): void {
    this.idImages = idImages;
  }

  forwardView(view: string): void {
    this.view = view;
  }
}
