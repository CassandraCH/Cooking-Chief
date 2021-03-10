import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtapeListeComponent } from './etape-liste.component';

describe('EtapeListeComponent', () => {
  let component: EtapeListeComponent;
  let fixture: ComponentFixture<EtapeListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtapeListeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EtapeListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
