import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  userQuery = new Map<string, string>();
  userTags: string = '';
  tailleImg: string = '';
  dateMin: string = '';
  dateMax: string = '';
  methodeTri: string = 'date-posted-desc';
  inGallery: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  search(): string {
    this.userTags = this.userTags.replace(' ', '+');
    this.userQuery.set('tags', this.userTags);

    if (this.dateMin != '') {
      const dateMinStamp = Math.round(new Date(this.dateMin.replace('-', '/')).getTime() / 1000).toString();
      this.userQuery.set('min_upload_date', dateMinStamp);
    }

    if (this.dateMax != '') {
      const dateMaxStamp = Math.round(new Date(this.dateMax.replace('-', '/')).getTime() / 1000).toString();
      this.userQuery.set('max_upload_date', dateMaxStamp);
    }

    this.userQuery.set('sort', this.methodeTri);

    if (this.inGallery) {
      this.userQuery.set('in_gallery', 'yes');
    }
    else {
      this.userQuery.set('in_gallery', 'no');
    }

    if (this.tailleImg != '')
    {
      this.userQuery.set('dimension_search_mode', 'min');
      this.userQuery.set('height', this.tailleImg);
      this.userQuery.set('width', this.tailleImg);
    }
    return this.convert(this.userQuery);
  }

  convert(userQuery: Map<string, string>): string {
    let query: string = '';

    for (const [key, value] of userQuery) {
      query += '&' + key + '=' + value;
    }

    return query;
  }

}
