import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { CarComponent } from './car/car.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CarComponent, RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'used-cars';
}
