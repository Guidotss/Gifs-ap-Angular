import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  constructor(
    private gifsService:GifsService
  ){}

  get TagsHistory(): string[] {
    return this.gifsService.TagsHistory;
  }

  public searchTag(tag:string){
    this.gifsService.searchTag(tag);
  }

}
