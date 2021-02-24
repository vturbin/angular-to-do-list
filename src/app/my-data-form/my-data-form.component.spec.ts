import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDataFormComponent } from './my-data-form.component';

describe('MyDataFormComponent', () => {
  let component: MyDataFormComponent;
  let fixture: ComponentFixture<MyDataFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyDataFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDataFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
