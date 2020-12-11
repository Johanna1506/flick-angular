import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ImagesService} from '../images.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent implements OnInit {
  allImages: Array<any> = [];
  urlImages: Array<any> = [];
  constructor(private images: ImagesService) {}

  ngOnInit(): void {
     this.images.getImages('puppy').subscribe(data => {
       this.allImages = data.photos.photo;

       this.allImages.forEach(photo => {
         const url = `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;
         this.urlImages.push(url);

       });
     });
  }
}
