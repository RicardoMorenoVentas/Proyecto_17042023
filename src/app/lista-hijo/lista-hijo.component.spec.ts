import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaHijoComponent } from './lista-hijo.component';

describe('ListaHijoComponent', () => {
  let component: ListaHijoComponent;
  let fixture: ComponentFixture<ListaHijoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaHijoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaHijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
