import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtapeComponent } from './etape.component';

describe('EtapeComponent', () => {
  let component: EtapeComponent;
  let fixture: ComponentFixture<EtapeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtapeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EtapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
