import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadMoreComponent } from './read-more.component';
import { By } from '@angular/platform-browser';

describe('ReadMoreComponent', () => {
  let component: ReadMoreComponent;
  let fixture: ComponentFixture<ReadMoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadMoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should hide element when display set to false', () => {
    component.display = false;
    fixture.detectChanges();
    const mainElement = fixture.debugElement.query(By.css('button'));
    expect(mainElement).toBeNull();
  });

  it('should display element when display set to true', () => {
    component.display = true;
    fixture.detectChanges();
    const mainElement = fixture.debugElement.query(By.css('button')).nativeElement;
    expect(mainElement).toBeDefined();
  });

  it('should emit a readMore event on click', () => {
    const spy = spyOn(component.readMore, 'emit');
    const button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();

    fixture.whenStable().then(() => {
      expect(spy).toHaveBeenCalled();
    });
  });

  it('should toggle the display property to false on click', () => {
    const button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();

    fixture.whenStable().then(() => {
      expect(component.display).toBeFalsy();
    });
  });
});
