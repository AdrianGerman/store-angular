import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './domains/shared/components/header/header.component';
import { ListComponent } from './domains/products/pages/list/list.component';
import { Product } from './domains/shared/models/product.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, ListComponent],
  template: '<router-outlet />',
  // <app-header [cart]="cart()"/>
})
export class AppComponent {
  title = 'store-angular';
}
