import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AdditionalBillingDetailsComponent } from './additional-billing-details.component';

describe('AdditionalBillingDetailsComponent', () => {
  let component: AdditionalBillingDetailsComponent;
  let fixture: ComponentFixture<AdditionalBillingDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdditionalBillingDetailsComponent, NoopAnimationsModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdditionalBillingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have billing email', () => {
    expect(component.billingEmail).toContain('@');
  });
});
