import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import {ImagesService} from '../images.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  image$: Observable<any>;
  imgData: {} = {};
  otherImgAuthor: {};


  constructor(private images: ImagesService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const imgId = this.route.snapshot.paramMap.get('id');
    this.image$ = this.images.getInfos(imgId);

    this.image$.subscribe(data => {
      this.imgData = data.photo;
    }, error => {console.log(error); });

    /*this.images.getImagesAuthor(this.imgData.owner.nsid).subscribe(data => {
      this.otherImgAuthor = data;
    });*/
  }
}
