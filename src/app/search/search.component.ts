import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {ImagesService} from '../images.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  advanced: boolean = false;
  view: string = "list";
  userTags: string;
  tailleImg: string = '';
  dateMin: string = '';
  dateMax: string = '';
  methodeTri: string = 'date-posted-desc';
  inGallery: boolean = false;
  userQueryString: string = '';
  @Output() sendUrls = new EventEmitter<object>();
  @Output() sendView = new EventEmitter<string>();

  urlImages: {} = [];

  constructor(private images: ImagesService, private router: Router) { }

  ngOnInit(): void {
  }

  search(): void {
    this.userQueryString = this.parseQuery();
    this.getImgList(this.userQueryString);
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

    this.urlImages = {};
    this.images.getImages(queryString).subscribe(data => {
      (data.photos.photo).forEach(photo => {
        this.urlImages[photo.id] = `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;
      });
    });
    this.router.navigate(['/']);
  }

  toggleAdvanced(): void {
    this.advanced = !this.advanced;
  }

  activateListView(): void {
    this.view = 'list';
    this.sendView.emit(this.view);
  }

  activateSliderView(): void {
    this.view = 'slider';
    this.sendView.emit(this.view);
  }

}
