import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { map, switchMap, tap, pluck } from 'rxjs/operators';
import { HttpParams, HttpClient } from '@angular/common/http';
import { Interface } from 'readline';

interface Article {
  title: string;
  url: string;
}

interface NewsApiResponse {
  totalResult: number;
  articles: Article[]
}

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  private url = 'https://newsapi.org/v2/top-headlines'
  private pageSize = 10
  private apiKey = 'fdb496381c4b4a13bf841e12413159bd'
  private country = 'us'

  private pagesInput: Subject<number>
  pagesOutput: Observable<Article[]>
  numberOfPages: Subject<number>

  constructor(private http: HttpClient) {

    this.numberOfPages = new Subject()
    this.pagesInput = new Subject()
    this.pagesOutput = this.pagesInput.pipe(
      map((page) => {
        return new HttpParams()
          .set('apiKey', this.apiKey)
          .set('country', this.country)
          .set('pageSize', String(this.pageSize))
          .set('page', String(page))
      }),
      switchMap(params => {
        return this.http.get<NewsApiResponse>(this.url, { params })
      }),
      tap(response => {
        const totalPages = Math.ceil(response.totalResult / this.pageSize)
        this.numberOfPages.next(totalPages)
      }),
      pluck('articles')
    )


  }

  getPage(page: number) {
    this.pagesInput.next(page)
  }

}
