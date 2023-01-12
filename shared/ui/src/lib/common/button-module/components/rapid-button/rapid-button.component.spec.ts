import { RapidButtonComponent } from './rapid-button.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('RapidButtonComponent', () => {
  let component: RapidButtonComponent;
  let fixture: ComponentFixture<RapidButtonComponent>;
  
  beforeEach(() => {
    TestBed.configureTestingModule({ declarations: [ RapidButtonComponent ] });
    fixture = TestBed.createComponent(RapidButtonComponent);
    component = fixture.componentInstance;
  });

  it('Should succesfully create', () => {
    expect(component).toBeDefined();
  });

  it('Should not have undefined content', () => {
    const buttonElement: HTMLElement = fixture.nativeElement;
    console.log(buttonElement.textContent);
    expect(buttonElement.textContent).not.toBeUndefined();
  });
});
