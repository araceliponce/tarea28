import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { AutenticacionService } from 'src/app/services/autenticacion.service';

import { LoginComponent } from './login.component';
import { HttpClientTestingModule} from '@angular/common/http/testing' //+++++++

//creamos un mock del service
/* const mockAutenticacionService:{
  login:()=> any,
  logout:()=> any,
  isLoggedIn:(url: string)=> any
} */

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [
        FormBuilder,

        // AutenticacionService, 
        // HttpClientTestingModule //+++++++
      ],
      providers:[
        AutenticacionService //+
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
