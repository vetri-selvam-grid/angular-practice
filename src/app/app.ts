import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ShortenPipe } from './pipes/shorten-pipe';

@Component({
  selector: 'app-root',
  imports: [ShortenPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  f?: string;
  protected readonly title = signal('angular');
}