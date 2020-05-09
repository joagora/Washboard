import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutDetailsComponent } from './about-details.component';
import { By } from '@angular/platform-browser';

describe('AboutDetailsComponent', () => {
  let component: AboutDetailsComponent;
  let fixture: ComponentFixture<AboutDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should display the about details when display property is set to true', () => {
    component.display = true;
    fixture.detectChanges();
    const mainElement = fixture.debugElement.query(By.css('main')).nativeElement;
    expect(mainElement).toBeDefined();
  });
});
