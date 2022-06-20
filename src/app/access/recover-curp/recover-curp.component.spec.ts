import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoverCurpComponent } from './recover-curp.component';

describe('RecoverCurpComponent', () => {
  let component: RecoverCurpComponent;
  let fixture: ComponentFixture<RecoverCurpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecoverCurpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecoverCurpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
