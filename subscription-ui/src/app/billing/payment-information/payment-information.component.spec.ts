import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { PaymentInformationComponent } from './payment-information.component';

describe('PaymentInformationComponent', () => {
  let component: PaymentInformationComponent;
  let fixture: ComponentFixture<PaymentInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymentInformationComponent, NoopAnimationsModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaymentInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have billing address', () => {
    expect(component.billingAddress.country).toBe('United States');
  });
});
