import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFoComponent } from './reactive-fo.component';

describe('ReactiveFoComponent', () => {
  let component: ReactiveFoComponent;
  let fixture: ComponentFixture<ReactiveFoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveFoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
