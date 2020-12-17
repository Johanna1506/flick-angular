import {Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import {ImagesService} from '../images.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent implements OnInit {

  @Input() urlImages: {};
  selectedId: string;
  imgData: object;

  constructor(private route: ActivatedRoute, private router: Router) {}


  ngOnInit(): void {
  }

  showDetails(imgId: string): void {
    this.router.navigate(['/image', imgId]);
  }
}
