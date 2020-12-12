import {Component, OnInit, Input } from '@angular/core';
import {ImagesService} from '../images.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent implements OnInit {
  allImages: Array<any> = [];
  urlImages: Array<any> = [];
  @Input() url: string;

  constructor(private images: ImagesService) {}


  ngOnInit(): void {
      console.log(this.url);
     this.images.getImages(this.url).subscribe(data => {
       this.allImages = data.photos.photo;

       this.allImages.forEach(photo => {
         const url = `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;
         this.urlImages.push(url);

       });
     });
  }
}
