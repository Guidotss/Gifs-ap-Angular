import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';



@Component({
  selector: 'app-gifs-card',
  templateUrl: './gifs-card.component.html',
})
export class GifsCardComponent implements OnInit {
  constructor(){}

  @Input()
  public gif:Gif = {} as Gif;


  ngOnInit(): void {
    if(!this.gif)
    throw new Error('Gif property is required');
  }



}
