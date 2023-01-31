import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CalculadoraComponent } from './calculadora.component';

describe('CalculadoraComponent', () => {
  let component: CalculadoraComponent;
  let fixture: ComponentFixture<CalculadoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculadoraComponent ],
      imports: [

      ] //todo lo de material, en el spec de app.omponent tmb agregar imports[todos los imports de material y reactive forms y browser animations]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //tests

  it('test de suma', () => {
    component.valorA = 5;
    component.valorB = 2;
    component.sumar = true;

    const btnEnviar = fixture.debugElement.query(By.css('#btnCalcular'));

    btnEnviar.nativeElement.click();

    expect(component.respuestaNumero).toEqual(7);
  });

});
