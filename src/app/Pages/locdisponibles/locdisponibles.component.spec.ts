import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocdisponiblesComponent } from './locdisponibles.component';

describe('LocdisponiblesComponent', () => {
  let component: LocdisponiblesComponent;
  let fixture: ComponentFixture<LocdisponiblesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocdisponiblesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocdisponiblesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
