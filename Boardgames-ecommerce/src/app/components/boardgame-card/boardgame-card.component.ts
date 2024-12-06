import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

import { Boardgames } from './../../models/boardgames';


@Component({
  selector: 'app-boardgame-card',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, MatIconModule],
  templateUrl: './boardgame-card.component.html',
  styleUrl: './boardgame-card.component.scss'
})
export class BoardgameCardComponent {
  @Input() boardgame?: Boardgames = {
    
    id: 0,
    title: "Default Boardgame",
    imageLink: "https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg",
    price: 0.00,
    description: "No Board Game Load"

  };

  @Output() warnBoardGameCatalog: EventEmitter<Boardgames> = new EventEmitter();

  warnParentAboutItemAddition(boardgames: Boardgames) {
    console.log(`Avisa que cliquei no jogo ${boardgames.title}`)
    this.warnBoardGameCatalog.emit();
    
    

  }

}


 

