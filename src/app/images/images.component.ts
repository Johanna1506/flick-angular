import {Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent implements OnInit {

  @Input() urlImages;
  selectedId: string;
  imgData: object;
  @Input() view: string;
  index: number = 0;
  currentImgId: string;
  currentImgUrl: string;

  constructor(private route: ActivatedRoute, private router: Router) {}


  ngOnInit(): void {
    this.view = 'mosaic';
    this.currentImgId = this.urlImages.keys[this.index];
    this.currentImgUrl = this.urlImages[this.currentImgId];
  }

  showDetails(imgId: string): void {
    this.router.navigate(['/image', imgId])
      .then(() => {
        window.location.reload();
      });
  }

  prev(): void {
    const nbImages = this.urlImages.keys.length;
    this.index = (this.index <= 0) ? (nbImages - 1) : this.index - 1;
    this.currentImgId = this.urlImages.keys[this.index];
    this.currentImgUrl = this.urlImages[this.currentImgId];
  }

  next(): void {
    const nbImages = this.urlImages.keys.length;
    this.index = (this.index >= nbImages - 1) ? 0 : this.index + 1;
    this.currentImgId = this.urlImages.keys[this.index];
    this.currentImgUrl = this.urlImages[this.currentImgId];
  }
}
