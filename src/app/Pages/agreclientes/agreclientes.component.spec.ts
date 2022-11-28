import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgreclientesComponent } from './agreclientes.component';

describe('AgreclientesComponent', () => {
  let component: AgreclientesComponent;
  let fixture: ComponentFixture<AgreclientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgreclientesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgreclientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
