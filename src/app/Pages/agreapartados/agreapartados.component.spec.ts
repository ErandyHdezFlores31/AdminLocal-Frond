import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgreapartadosComponent } from './agreapartados.component';

describe('AgreapartadosComponent', () => {
  let component: AgreapartadosComponent;
  let fixture: ComponentFixture<AgreapartadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgreapartadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgreapartadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
