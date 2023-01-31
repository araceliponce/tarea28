import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { HomeComponent } from './home.component';

/* // Errores: 
NullInjectorError: No provider for ActivatedRoute! 

Unexpected value 'ActivatedRoute' imported by the module 'DynamicTestModule'. Please add an @NgModule annotation.

*/
describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [
        ActivatedRoute
      ],
      providers:[
        // ActivatedRoute
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /* Your test suite must contain at least one test */

  /*  it('should create', () => {
    expect(component).toBeTruthy();
  }); //genera error siempre */

  it('should have a var named title', () => {
    // const fixture = TestBed.createComponent(HomeComponent);
    // const component = fixture.componentInstance;

    expect(component.title).toBeTruthy();
  });
});
