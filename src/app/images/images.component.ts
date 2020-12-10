import { Component, OnInit } from '@angular/core';
import {ImagesService} from '../images.service';
import {Observable, Subscription} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent implements OnInit {

  allImages: Array<any> = [];
  urlImages: Array<any> = [];
  constructor(private images: ImagesService ) {}

  ngOnInit(): void {
     this.images.getImages('harry').subscribe(data => {
       this.allImages = data.photos.photo;
       console.log(this.allImages);
       this.allImages.forEach(photo => {
         const url = `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;
         this.urlImages.push(url);
         console.log(this.urlImages);
       });
     });
  }
}
