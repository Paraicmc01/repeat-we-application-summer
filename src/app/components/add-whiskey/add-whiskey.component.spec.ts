import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWhiskeyComponent } from './add-whiskey.component';

describe('AddWhiskeyComponent', () => {
  let component: AddWhiskeyComponent;
  let fixture: ComponentFixture<AddWhiskeyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddWhiskeyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddWhiskeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
