import { Injectable } from '@angular/core';

import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError} from 'rxjs/operators';

const apikey = 'd3e6629530f0590b0667b06647ce4c39';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {


  constructor(private http: HttpClient) { }

  getImages(url: string): Observable<any>{

    const urlApi = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apikey}${url}&format=json&nojsoncallback=1`;

    // @ts-ignore
    return this.http.get(urlApi);

  }

  getInfos(id: string): Observable<any> {

    const urlApi = `https://www.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=${apikey}&photo_id=${id}&format=json&nojsoncallback=1`;

    // @ts-ignore
    return this.http.get(urlApi);

  }

}
