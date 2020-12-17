import {Component, OnInit, Input } from '@angular/core';
import {ImagesService} from '../images.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent implements OnInit {

  @Input() urlImages: {};
  imgData: object;

  constructor(private images: ImagesService) {}


  ngOnInit(): void {
    // this.images.getInfos(this.id).subscribe(data => {
    //   this.imgData = data;
    // });
  }
}
