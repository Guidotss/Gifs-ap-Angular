import { Injectable } from '@angular/core';
import { GifsModule } from '../gifs.module';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class GifsService {
  private _tagsHistory: string[] = [];
  private serviceUrl: string = 'https://api.giphy.com/v1/gifs';
  private apiKey: string = 'eY6fdP7wtvhzRb6k7fTOgAIv1bqKSsfl'; //esto no se deberia hacer asi

  constructor(private http: HttpClient) {}

  get TagsHistory(): string[] {
    return [...this._tagsHistory];
  }

  private organizeHistory(tag: string): void {
    tag = tag.toLowerCase();

    if (this.TagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter((t) => t !== tag);
    }
    this._tagsHistory = [tag, ...this._tagsHistory.splice(0, 9)];
  }

  public searchTag(tag: string): void {
    this._tagsHistory = [tag, ...this._tagsHistory];
    this.organizeHistory(tag);

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('q', tag)
      .set('limit', '10');

    this.http
      .get(`${this.serviceUrl}/search`, { params })
      .subscribe((resp: any) => {
        console.log(resp.data);
      });
  }
}
