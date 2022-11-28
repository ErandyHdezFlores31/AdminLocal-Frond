import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgrelocalesComponent } from './agrelocales.component';

describe('AgrelocalesComponent', () => {
  let component: AgrelocalesComponent;
  let fixture: ComponentFixture<AgrelocalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgrelocalesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgrelocalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
