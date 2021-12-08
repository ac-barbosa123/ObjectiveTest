import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/providers/http/http.service'
@Injectable({
  providedIn: 'root'
})
export class IndexService {

  constructor(public httpService: HttpService) { }

  public getCharacters() {
    return this.httpService.get('characters?ts=1000&apikey=4991f6b67c071092dbe67b36faae5681&hash=f0de242ee98d75c3990f9ec4147faf73&offset=0&limit=100')
  }

  public findOne(id: number) {
    return this.httpService.get('characters/' + id + '?ts=1000&apikey=4991f6b67c071092dbe67b36faae5681&hash=f0de242ee98d75c3990f9ec4147faf73&offset=0&limit=100');

  }
}
