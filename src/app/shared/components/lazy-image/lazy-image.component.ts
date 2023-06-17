import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',
})

export class LazyImageComponent implements OnInit{
  @Input()
  public url:string = '';

  @Input()
  public alt:string = '';

  private _hasLoaded:boolean = false;


  ngOnInit(): void {
    if(!this.url)
    throw new Error('Url property is required');
  }

  public onLoad():void{
    console.log('Image has loaded');
    this._hasLoaded = true;
  }

  public get hasLoaded():boolean{
    return this._hasLoaded;
  }
}
