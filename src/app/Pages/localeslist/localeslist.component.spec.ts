import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocaleslistComponent } from './localeslist.component';

describe('LocaleslistComponent', () => {
  let component: LocaleslistComponent;
  let fixture: ComponentFixture<LocaleslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocaleslistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocaleslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
