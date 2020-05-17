import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TourListComponent } from './tour-list.component';
import { TourItemComponent } from './tour-item/tour-item.component';
import { ExternalLinkButtonComponent } from '../external-link-button/external-link-button.component';

describe('TourListComponent', () => {
  let component: TourListComponent;
  let fixture: ComponentFixture<TourListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TourListComponent,
        TourItemComponent,
        ExternalLinkButtonComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TourListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
