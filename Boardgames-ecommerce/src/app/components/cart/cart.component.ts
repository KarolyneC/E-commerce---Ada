import { Component, Input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { CartItem } from '../../models/cart-item';


@Component({
  selector: 'app-cart',
  imports: [
    MatListModule,
    MatDividerModule,
    MatIconModule,
    MatButtonModule,
    CurrencyPipe
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  totalPRice: number = 0;
 @Input("cartArr") cartItensArray: CartItem[] = []

  addItem(item: CartItem) {
    item.quantity++;
    this.totalPRice += item.product.price;
  }

  removeItem(item: CartItem) {
    item.quantity--;
    this.totalPRice -= item.product.price;
    this.totalPRice = Math.max(this.totalPRice, 0);
  }

}
