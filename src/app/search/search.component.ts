import {Component, OnInit, Output, EventEmitter, OnChanges} from '@angular/core';
import {ImagesService} from '../images.service';
import {Router} from '@angular/router';
import {CacheService} from '../cache.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  advanced: boolean = false;
  view: string = "mosaic";
  userTags: string;
  tailleImg: string = '';
  dateMin: string = '';
  dateMax: string = '';
  methodeTri: string = 'date-posted-desc';
  inGallery: boolean = false;
  userQueryString: string = '';
  @Output() sendUrls = new EventEmitter<object>();
  @Output() sendIds = new EventEmitter<object>();
  @Output() sendView = new EventEmitter<string>();

  urlImages: string[] = [];
  idImages: string[] = [];

  constructor(private images: ImagesService, private router: Router, private cache: CacheService) { }

  ngOnInit(): void {
    this.sendView.emit(this.view);
  }

  search(): void {
    this.userQueryString = this.parseQuery();
    this.getImgList(this.userQueryString);
    this.sendIds.emit(this.idImages);
    this.sendUrls.emit(this.urlImages);
  }

  parseQuery(): string {
    this.userTags = this.userTags.replace(' ', '+');

    const userQuery = new Map<string, string>();
    userQuery.set('tags', this.userTags);

    if (this.dateMin !== '') {
      const dateMinStamp = Math.round(new Date(this.dateMin.replace('-', '/')).getTime() / 1000).toString();
      userQuery.set('min_upload_date', dateMinStamp);
    }

    if (this.dateMax !== '') {
      const dateMaxStamp = Math.round(new Date(this.dateMax.replace('-', '/')).getTime() / 1000).toString();
      userQuery.set('max_upload_date', dateMaxStamp);
    }

    userQuery.set('sort', this.methodeTri);

    if (this.inGallery) {
      userQuery.set('in_gallery', 'yes');
    }
    else {
      userQuery.set('in_gallery', 'no');
    }

    if (this.tailleImg !== '')
    {
      userQuery.set('dimension_search_mode', 'min');
      userQuery.set('height', this.tailleImg);
      userQuery.set('width', this.tailleImg);
    }
    return this.convert(userQuery);
  }

  convert(userQuery: Map<string, string>): string {
    let query: string = '';

    for (const [key, value] of userQuery) {
      query += '&' + key + '=' + value;
    }

    return query;
  }

  getImgList(queryString): void {
    // recuperation de la liste des images depuis le service images
    let index = 0;
    this.images.getImages(queryString).subscribe(data => {
      (data.photos.photo).forEach(photo => {
        this.idImages[index] = photo.id;
        this.urlImages[index] = `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;
        index ++;
      });
    });
    this.router.navigate(['/']);
  }

  toggleAdvanced(): void {
    this.advanced = !this.advanced;
  }

  activateMosaicView(): void {
    this.view = 'mosaic';
    this.sendView.emit(this.view);
  }

  activateSliderView(): void {
    this.view = 'slider';
    this.sendView.emit(this.view);
  }

}
