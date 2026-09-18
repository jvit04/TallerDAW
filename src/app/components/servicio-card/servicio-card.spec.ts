import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ServicioCardComponent } from './servicio-card';

describe('ServicioCardComponent', () => {
  let component: ServicioCardComponent;
  let fixture: ComponentFixture<ServicioCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicioCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ServicioCardComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
