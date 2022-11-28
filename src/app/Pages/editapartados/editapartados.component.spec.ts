import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditapartadosComponent } from './editapartados.component';

describe('EditapartadosComponent', () => {
  let component: EditapartadosComponent;
  let fixture: ComponentFixture<EditapartadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditapartadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditapartadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
