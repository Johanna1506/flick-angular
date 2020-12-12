import { Injectable } from '@angular/core';

import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {


  constructor(private http: HttpClient) { }

  getImages(url: string): Observable<any>{

    const urlApi = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=d430fbccb88b05fc931fc24d8400e71e&tags=${url}&format=json&nojsoncallback=1`;

    // @ts-ignore
    return this.http.get(urlApi);

  }


}
