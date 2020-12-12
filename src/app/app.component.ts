import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'flickr';
  url: string;


  receivedUrl(url: string): void {
    this.url = url;
  }
}
