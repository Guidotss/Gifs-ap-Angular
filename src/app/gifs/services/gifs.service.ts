import { Injectable } from '@angular/core';
import { GifsModule } from '../gifs.module';

@Injectable({providedIn: 'root'})
export class GifsService {

  private _tagsHistory: string[] = [];
  private apiKey: string = 'eY6fdP7wtvhzRb6k7fTOgAIv1bqKSsfl'; //esto no se deberia hacer asi

  constructor() { }


  get TagsHistory(): string[] {
    return [...this._tagsHistory];
  }

  private organizeHistory(tag: string): void {
    tag = tag.toLowerCase();

    if(this.TagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter(t => t !== tag);
    }
    this._tagsHistory = [tag, ...this._tagsHistory.splice(0, 9)];
  }

  public async searchTag (tag: string): Promise<void> {
    this._tagsHistory = [tag, ...this._tagsHistory];
    this.organizeHistory(tag);
    console.log(tag);

    const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${this.apiKey}&q=${tag}&limit=10`);
    const { data } = await response.json();
    console.log(data);


  }

}
