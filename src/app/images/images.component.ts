import {Component, OnInit, Input, OnChanges } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent implements OnInit, OnChanges {

  @Input() urlImages;
  @Input() idImages;
  selectedId: string;
  imgData: object;
  @Input() view: string;
  index: number = 0;
  currentImgId: string;
  currentImgUrl: string;

  constructor(private route: ActivatedRoute, private router: Router) {}


  ngOnInit(): void {
  }

  ngOnChanges(): void {
    if (this.urlImages !== undefined && this.idImages !== undefined) {
      this.updateImage();
    }
  }

  showDetails(imgId: string): void {
    this.router.navigate(['/image', imgId])
      .then(() => {
        window.location.reload();
      });
  }

  prev(): void {
    this.index = (this.index <= 0) ? (this.urlImages.length - 1) : this.index - 1;
    this.updateImage();
  }

  next(): void {
    this.index = (this.index >= this.urlImages.length - 1) ? 0 : this.index + 1;
    this.updateImage();
  }

  updateImage(): void {
    this.currentImgId = this.idImages[this.index];
    this.currentImgUrl = this.urlImages[this.index];
  }
}
