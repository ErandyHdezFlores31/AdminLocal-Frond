import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApartadoslistComponent } from './apartadoslist.component';

describe('ApartadoslistComponent', () => {
  let component: ApartadoslistComponent;
  let fixture: ComponentFixture<ApartadoslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApartadoslistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApartadoslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
