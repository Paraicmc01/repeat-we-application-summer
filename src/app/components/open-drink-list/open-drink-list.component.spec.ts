import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenDrinkListComponent } from './open-drink-list.component';

describe('OpenDrinkListComponent', () => {
  let component: OpenDrinkListComponent;
  let fixture: ComponentFixture<OpenDrinkListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenDrinkListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenDrinkListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
