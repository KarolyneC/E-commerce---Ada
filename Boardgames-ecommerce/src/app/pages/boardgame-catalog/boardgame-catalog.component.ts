import { Component, EventEmitter, Output } from '@angular/core';

import { Boardgames } from './../../models/boardgames';
import { BoardgameCardComponent } from "../../components/boardgame-card/boardgame-card.component";

@Component({
  selector: 'app-boardgame-catalog',
  standalone: true,
  imports: [BoardgameCardComponent],
  templateUrl: './boardgame-catalog.component.html',
  styleUrl: './boardgame-catalog.component.scss'
})
export class BoardgameCatalogComponent {
  @Output() warnApp: EventEmitter<Boardgames> = new EventEmitter();
  boardgamesArray: Boardgames[] = [
    {
      id: 1,
      title: "Azul",
      imageLink: "https://m.media-amazon.com/images/I/81sRtWxt60L.jpg",
      price: 329.99,
      description:
        `O jogo de tabuleiro Azul, lançado em 2018 e inspirado na arte moura dos azulejos portugueses, desafia de 2 a 4 jogadores a decorar o Palácio Real de Évora, combinando estética, estratégia e pontuação, e venceu o prêmio Spiel des Jahres.`
    },

    {
      id: 2,
      title: "Ticket to Ride Paris",
      imageLink: "https://www.mundogalapagos.com.br/ccstore/v1/images/?source=/file/v2462306351950744660/products/TTR022_3D-Front-01.jpg",
      price: 199.99,
      description:
        `Ticket to Ride:Paris é uma versão dinâmica e rápida do clássico jogo de tabuleiro, onde os jogadores competem para explorar a Paris dos anos 1920, completando Bilhetes do Destino em apenas 15 minutos.`
    },

    {
      id: 3,
      title: "Marvel Zombies: Um Jogo Zombicide - X-Men Resistance",
      imageLink: "https://www.mundogalapagos.com.br/ccstore/v1/images/?source=/file/v6593118316002714118/products/ZOM503_3D-Box-01_OCC.jpg",
      price: 749.99,
      description:
        `Marvel Zombies: Um Jogo Zombicide - X-Men Resistance é um jogo cooperativo para 1 a 6 jogadores, onde super-heróis sobreviventes enfrentam hordas de zumbis em missões estratégicas para salvar civis e conter o apocalipse.`
    },

    {
      id: 4,
      title: "Dixit",
      imageLink: "https://www.mundogalapagos.com.br/ccstore/v1/images/?source=/file/v4114340520070629436/products/DIX301_3D.jpg",
      price: 279.99,
      description:
        `Dixit é um jogo de dedução e criatividade para até 8 jogadores, onde cartas surrealistas inspiram aventuras únicas em um mundo de fantasia e descobertas pessoais.`
    },

    {
      id: 5,
      title: "Marvel United",
      imageLink: "https://www.mundogalapagos.com.br/ccstore/v1/images/?source=/file/v1249063543014103079/products/MVU001_OCC.png",
      price: 279.99,
      description:
        `Marvel United é um jogo cooperativo para até 4 jogadores ou solo, onde heróis da Marvel unem forças para derrotar vilões icônicos usando estratégias combinadas e baralhos exclusivos.`
    },

    {
      id: 6,
      title: "Munchkin",
      imageLink: "https://www.mundogalapagos.com.br/ccstore/v1/images/?source=/file/v6496742742642118634/products/MUN001_3D.jpg",
      price: 149.99,
      description:
        `Munchkin é um jogo de cartas satírico e estratégico, onde os jogadores exploram masmorras, enfrentam monstros, pegam tesouros e trapaceiam amigos em uma divertida paródia de RPG.`
    },

    {
      id: 7,
      title: "Exploding Kittens",
      imageLink: "https://www.mundogalapagos.com.br/ccstore/v1/images/?source=/file/v1165346404483712928/products/EXK401_3D-Box-01_OCC.jpg",
      price: 99.99,
      description:
        `Exploding Kittens é um jogo de cartas rápido e estratégico, onde os jogadores evitam explodir ao desarmar gatinhos com truques hilários ou empurrar o perigo para os outros.`
    },

    {
      id: 8,
      title: "O Senhor dos Anéis: Jornadas na Terra Média",
      imageLink: "https://www.mundogalapagos.com.br/ccstore/v1/images/?source=/file/v603767143808069804/products/JME001_3D.jpg",
      price: 799.99,
      description:
        `O Senhor dos Anéis: Jornadas na Terra Média é um jogo cooperativo guiado por aplicativo, onde heróis enfrentam desafios épicos, personalizam habilidades e exploram histórias inéditas no mundo da Terra Média.`
    },

    {
      id: 9,
      title: "Teen Titans GO! Mayhem",
      imageLink: "https://www.mundogalapagos.com.br/ccstore/v1/images/?source=/file/v6911110288636515397/products/MHS101_OCC.png",
      price: 399.99,
      description:
        `Teen Titans GO! Mayhem é um jogo de combate caótico entre equipes, onde os Jovens Titãs lutam com habilidades únicas em cenários icônicos, disputando pontos de vitória ou nocauteando adversários.`
    },

    {
      id: 10,
      title: "Reino de Cthulhu",
      imageLink: "https://www.mundogalapagos.com.br/ccstore/v1/images/?source=/file/v6298705443853342791/products/PAN201_3D.jpg",
      price: 379.99,
      description:
        `Reino de Cthulhu é um jogo cooperativo inspirado em Pandemic, onde investigadores trabalham juntos para selar portais e impedir o despertar de Cthulhu, enfrentando cultistas e Shoggoths no universo de H.P. Lovecraft.`

    },
];

warnParentAboutItemAddition(boardgames: Boardgames) {
  console.log(`Diga lá, vou avisar aqui também que você clicou no ${boardgames.title}`)
  this.warnApp.emit(boardgames);
}

}
