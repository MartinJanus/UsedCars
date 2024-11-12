import { Routes } from '@angular/router';
import { CarComponent } from './car/car.component';
import { DetailsComponent } from './details/details.component';

export const routes: Routes = [
  {
    path: '',
    component: CarComponent,
    title: 'Used cars',
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    title: 'Car details',
  },
];
