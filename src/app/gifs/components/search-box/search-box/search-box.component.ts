import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  templateUrl: './search-box.component.html',
})
export class SearchBoxComponent {

  constructor(
    private gifsService: GifsService
  ){};

  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  public searchTag(): void {
    const newTag = this.tagInput.nativeElement.value;

    if (newTag.trim().length > 0) {
      this.gifsService.searchTag(newTag);
      this.tagInput.nativeElement.value = '';
    }
  }
}
