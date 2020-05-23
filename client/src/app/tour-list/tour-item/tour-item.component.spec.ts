import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import moment from 'moment';
import { TourItemComponent } from './tour-item.component';
import { By } from '@angular/platform-browser';
import { ExternalLinkButtonComponent } from 'src/app/external-link-button/external-link-button.component';

describe('TourItemComponent', () => {
  let component: TourItemComponent;
  let fixture: ComponentFixture<TourItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TourItemComponent,
        ExternalLinkButtonComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TourItemComponent);
    component = fixture.componentInstance;
    component.tourItem = {
      title: 'Concert',
      content: 'A great concert',
      date: moment(),
      address: {
        country: 'US',
        city: 'New York',
        street: '5th Avenue',
        venue: 'Usher Hall'
      },
      ticketsLink: 'https://www.ticketmaster.co.uk/'
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should assign class hidden when no ticket link present', () => {
    component.tourItem.ticketsLink = undefined;
    fixture.detectChanges();
    const ticketsButton = fixture.debugElement.query(By.css('app-external-link-button'));
    expect(ticketsButton.classes['hidden']).toBe(true);
  });

  it('should not assign class hidden when ticket link is present', () => {
    fixture.detectChanges();
    const ticketsButton = fixture.debugElement.query(By.css('app-external-link-button'));
    expect(ticketsButton.classes['hidden']).toBe(false);
  });
});
