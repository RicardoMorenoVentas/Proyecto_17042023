import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPadreComponent } from './lista-padre.component';

describe('ListaPadreComponent', () => {
  let component: ListaPadreComponent;
  let fixture: ComponentFixture<ListaPadreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaPadreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaPadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
