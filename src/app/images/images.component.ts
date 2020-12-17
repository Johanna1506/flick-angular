import {Component, OnInit, Input } from '@angular/core';
import {ImagesService} from '../images.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent implements OnInit {

  urlImages: Array<any> = [];
  @Input() url: string;
  imgData: object;

  constructor(private images: ImagesService) {}


  ngOnInit(): void {
    // recuperation de la liste des images
    this.images.getImages(this.url).subscribe(data => {
      (data.photos.photo).forEach(photo => {
        const url = `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;
        this.urlImages.push(url);
      });
    });
  }


  showImgInfos(id: string): void {
    // recuperation des infos d'une image
    this.images.getInfos(id).subscribe(data => {
      this.imgData = data;
    });
  }
}
