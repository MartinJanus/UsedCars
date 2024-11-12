import { Injectable } from '@angular/core';
import { CarLocation } from './carlocation';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  constructor() {}
  carLocations: CarLocation[] = [
    {
      id: 0,
      brand: 'Toyota',
      model: 'Corolla',
      city: 'San Francisco',
      state: 'CA',
      photo: 'assets/images/toyota.jpg',
      availableCars: 10,
      year: '2018',
      fuel: 'Petrol',
      available: true,
    },
    {
      id: 1,
      brand: 'Ford',
      model: 'Focus',
      city: 'Los Angeles',
      state: 'CA',
      photo: 'assets/images/ford.jpg',
      availableCars: 5,
      year: '2019',
      fuel: 'Petrol',
      available: true,
    },
    {
      id: 2,
      brand: 'Chevrolet',
      model: 'Camaro',
      city: 'New York',
      state: 'NY',
      photo: 'assets/images/chevrolet.jpg',
      availableCars: 3,
      year: '2020',
      fuel: 'Petrol',
      available: true,
    },
    {
      id: 3,
      brand: 'Nissan',
      model: 'Micra',
      city: 'Miami',
      state: 'FL',
      photo: 'assets/images/nissan.jpg',
      availableCars: 2,
      year: '2017',
      fuel: 'Petrol',
      available: true,
    },
    {
      id: 4,
      brand: 'Honda',
      model: 'Civic',
      city: 'Chicago',
      state: 'IL',
      photo: 'assets/images/honda.jpg',
      availableCars: 8,
      year: '2016',
      fuel: 'Petrol',
      available: true,
    },
    {
      id: 5,
      brand: 'Hyundai',
      model: 'i30',
      city: 'Houston',
      state: 'TX',
      photo: 'assets/images/hyundai.jpg',
      availableCars: 1,
      year: '2015',
      fuel: 'Petrol',
      available: true,
    },
    {
      id: 6,
      brand: 'Kia',
      model: 'Rio',
      city: 'Phoenix',
      state: 'AZ',
      photo: 'assets/images/kia.jpg',
      availableCars: 4,
      year: '2014',
      fuel: 'Petrol',
      available: true,
    },
    {
      id: 7,
      brand: 'Mazda',
      model: 'MX-5',
      city: 'Philadelphia',
      state: 'PA',
      photo: 'assets/images/mazda.jpg',
      availableCars: 6,
      year: '2013',
      fuel: 'Petrol',
      available: true,
    },
    {
      id: 8,
      brand: 'Mercedes-Benz',
      model: 'S-Class',
      city: 'San Antonio',
      state: 'TX',
      photo: 'assets/images/mercedes.jpg',
      availableCars: 0,
      year: '2012',
      fuel: 'Petrol',
      available: false,
    },
    {
      id: 9,
      brand: 'Volkswagen',
      model: 'Golf',
      city: 'San Diego',
      state: 'CA',
      photo: 'assets/images/volkswagen.jpg',
      availableCars: 9,
      year: '2011',
      fuel: 'Diesel',
      available: true,
    },
  ];

  getAllCarLocations(): CarLocation[] {
    return this.carLocations;
  }
  getCarLocationById(id: number): CarLocation {
    return this.carLocations.find((car) => car.id === id) as CarLocation;
  }
  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(
      `Car application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`
    );
  }
}
