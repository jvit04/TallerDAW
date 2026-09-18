import { Component, OnInit, inject } from '@angular/core';
import { ServiciosService, Servicio } from '../../services/servicios';
import { ServicioCardComponent } from '../servicio-card/servicio-card';
 
@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [ServicioCardComponent],
  template: `
    <section>
      <h1>Servicios</h1>
      @if (cargando) {
        <p>Cargando servicios...</p>
      } @else {
        <div class="row g-4">
          @for (servicio of servicios; track servicio.id) {
            <div class="col-md-6 col-lg-4">
          <app-servicio-card [servicio]="servicio"></app-servicio-card>
            </div>
          }
        </div>
      }
    </section>
  `,
})
export class ServiciosComponent implements OnInit {
  private serviciosService = inject(ServiciosService);
  servicios: Servicio[] = [];
  cargando = true;
 
  ngOnInit(): void {
    this.serviciosService.obtenerServicios().subscribe({
      next: (data) => { this.servicios = data; this.cargando = false; },
      error: () => { this.cargando = false; },
    });
  }
}
