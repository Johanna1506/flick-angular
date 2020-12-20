import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const apikey = '9e01095e0f1e2d41940a0a36c8c523c5';

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

  getImagesAuthor(userId: string): Observable<any> {
    const urlApi = `https://www.flickr.com/services/rest/?method=flickr.people.getPhotosOf&api_key=${apikey}&user_id=${userId}&format=json&nojsoncallback=1`;

    return this.http.get(urlApi);
  }

}
