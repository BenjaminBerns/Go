import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CelluleComponent } from './cellule.component';

describe('CelluleComponent', () => {
  let component: CelluleComponent;
  let fixture: ComponentFixture<CelluleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CelluleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CelluleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
