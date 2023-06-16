import { Component, Input } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';



@Component({
  selector: 'app-gifs-card',
  templateUrl: './gifs-card.component.html',
})
export class GifsCardComponent {
  constructor(){}

  @Input() gif:Gif = {} as Gif;





}
