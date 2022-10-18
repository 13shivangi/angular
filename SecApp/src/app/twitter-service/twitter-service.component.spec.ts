import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitterServiceComponent } from './twitter-service.component';

describe('TwitterServiceComponent', () => {
  let component: TwitterServiceComponent;
  let fixture: ComponentFixture<TwitterServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwitterServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwitterServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
