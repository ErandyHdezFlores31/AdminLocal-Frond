import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditlocalesComponent } from './editlocales.component';

describe('EditlocalesComponent', () => {
  let component: EditlocalesComponent;
  let fixture: ComponentFixture<EditlocalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditlocalesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditlocalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
