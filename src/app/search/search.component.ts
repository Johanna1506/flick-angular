import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  userTags: string;
  userQuery = new Map<any, any>();

  constructor() { }

  ngOnInit(): void {
  }

  search() {
    this.userTags = this.userTags.replace(' ', '+');
    this.userQuery.set('tags', this.userTags);
    console.log(this.userQuery);
    return this.userQuery;
  }

}
