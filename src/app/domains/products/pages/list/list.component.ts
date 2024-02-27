import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../../components/product/product.component';
import { Product } from '../../../shared/models/product.model';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ProductComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  products = signal<Product[]>([]);

  constructor() {
    const initProducts: Product[] = [
      {
        id: Date.now(),
        title: 'Pro 7',
        price: 100,
        image: 'https://picsum.photos/600/640?r=23',
        creationAt: new Date().toISOString(),
      },
      {
        id: Date.now(),
        title: 'Pad 6',
        price: 120,
        image: 'https://picsum.photos/600/640?r=77',
        creationAt: new Date().toISOString(),
      },
      {
        id: Date.now(),
        title: 'Pad 6s',
        price: 130,
        image: 'https://picsum.photos/600/640?r=11',
        creationAt: new Date().toISOString(),
      },
      {
        id: Date.now(),
        title: 'Samsung tab s9 fe',
        price: 330,
        image: 'https://picsum.photos/600/640?r=34',
        creationAt: new Date().toISOString(),
      },
      {
        id: Date.now(),
        title: 'Pro 7',
        price: 100,
        image: 'https://picsum.photos/600/640?r=43',
        creationAt: new Date().toISOString(),
      },
      {
        id: Date.now(),
        title: 'Pad 6',
        price: 120,
        image: 'https://picsum.photos/600/640?r=32',
        creationAt: new Date().toISOString(),
      },
      {
        id: Date.now(),
        title: 'Pad 6s',
        price: 130,
        image: 'https://picsum.photos/600/640?r=61',
        creationAt: new Date().toISOString(),
      },
      {
        id: Date.now(),
        title: 'Samsung tab s9 fe',
        price: 330,
        image: 'https://picsum.photos/600/640?r=65',
        creationAt: new Date().toISOString(),
      },
    ];
    this.products.set(initProducts);
  }

  fromChild(event: string) {
    console.log('estamos en el padre');
    console.log(event);
  }
}
