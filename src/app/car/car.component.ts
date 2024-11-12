import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarLocationComponent } from '../car-location/car-location.component';
import { CarLocation } from '../carlocation';
import { CarService } from '../car.service';

@Component({
  selector: 'app-car',
  standalone: true,
  imports: [CommonModule, CarLocationComponent],
  templateUrl: './car.component.html',
  styleUrl: './car.component.css',
})
export class CarComponent {
  carLocationList: CarLocation[] = [];
  carService: CarService = inject(CarService);
  filteredLocationList: CarLocation[] = [];

  constructor() {
    this.carLocationList = this.carService.getAllCarLocations();
    this.filteredLocationList = [...this.carLocationList];
  }
  filterResults(text: string) {
    const searchText = text.trim().toLowerCase();
    if (!searchText) {
      this.filteredLocationList = [...this.carLocationList];
      return;
    }

    this.filteredLocationList = this.carLocationList.filter(
      (car) =>
        car.city.toLowerCase().includes(searchText) ||
        car.brand.toLowerCase().includes(searchText)
    );
  }
}
