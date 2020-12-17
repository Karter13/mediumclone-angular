import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

import {GetFeedResponseInterface} from '../types/getFeedResponse.interface';
import {environment} from '../../../../../environments/environment';

@Injectable()
export class FeedService {
  constructor(private http: HttpClient) {
  }

  getFeed(url: string): Observable<GetFeedResponseInterface> {
    const fulUrl = environment.apiUrl + url;

    return this.http.get<GetFeedResponseInterface>(fulUrl);
  }
}