import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { ServiciosComponent } from './components/servicios/servicios';
 
export const routes: Routes = [
  { path: '', component: Home },
  { path: 'servicios', component: ServiciosComponent },
  { path: '**', redirectTo: '' }, // ruta no encontrada → Home
];
