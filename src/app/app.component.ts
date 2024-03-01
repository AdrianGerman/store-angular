import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './domains/shared/components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  template: '<router-outlet />',
  // <app-header [cart]="cart()"/>
})
export class AppComponent {
  title = 'store-angular';
}
