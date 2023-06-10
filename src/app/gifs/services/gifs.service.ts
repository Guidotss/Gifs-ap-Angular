import { Injectable } from '@angular/core';
import { GifsModule } from '../gifs.module';

@Injectable({providedIn: 'root'})
export class GifsService {

  private _tagsHistory: string[] = [];

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

  public searchTag(tag: string): void {
    this._tagsHistory = [tag, ...this._tagsHistory];
    this.organizeHistory(tag);
  }

}
