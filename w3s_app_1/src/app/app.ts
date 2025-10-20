import { Component, Signal, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})



export class App {
  protected readonly title = signal('w3s_app_1');
  protected readonly version: Signal<string> = signal('0.0.1');

  get menuItems() {
    return [...Array(8)].map((_, i) => {
      return{ id: `menu-item-${i + 1}`, title: `Menu Item ${i + 1}`, link: `/item-${i + 1}` }
    });
  }
}
