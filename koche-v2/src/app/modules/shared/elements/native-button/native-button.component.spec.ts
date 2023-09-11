import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NativeButtonComponent } from './native-button.component';

describe('NativeButtonComponent', () => {
  let component: NativeButtonComponent;
  let fixture: ComponentFixture<NativeButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NativeButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NativeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
