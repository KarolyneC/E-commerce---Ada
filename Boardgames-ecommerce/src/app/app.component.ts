import { Boardgames } from './models/boardgames';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';

import { HeaderComponent } from "./components/header/header.component";
import { BoardgameCatalogComponent } from './pages/boardgame-catalog/boardgame-catalog.component';
import { CartComponent } from "./components/cart/cart.component";
import { CartItem } from './models/cart-item';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, BoardgameCatalogComponent, MatSidenavModule, CartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'Boardgames-ecommerce';
  cartItensArray: CartItem[] = [];

  addItemToCart(boardgame: Boardgames) {
    const foundIndex: number = this.cartItensArray.findIndex((item) => {
      return item.product.id === boardgame.id;
    })

    if (foundIndex == -1) {
      this.cartItensArray.push({
        product: boardgame,
        quantity: 1
      });
    } else {
      this.cartItensArray[foundIndex].quantity++;
    }




    console.log(this.cartItensArray);

  }
}

