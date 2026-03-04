import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-payment-information',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatSelectModule,
    MatChipsModule,
  ],
  templateUrl: './payment-information.component.html',
  styleUrl: './payment-information.component.scss',
})
export class PaymentInformationComponent {
  cardForm: FormGroup;
  editingCard = false;

  savedCard = {
    brand: 'Visa',
    last4: '4242',
    expMonth: 12,
    expYear: 2027,
    name: 'John Doe',
  };

  billingAddress = {
    line1: '88 Colin P Kelly Jr St',
    city: 'San Francisco',
    state: 'CA',
    zip: '94107',
    country: 'United States',
  };

  countries = ['United States', 'Canada', 'United Kingdom', 'Germany', 'France', 'Australia', 'Japan'];

  addressForm: FormGroup;
  editingAddress = false;

  constructor(private fb: FormBuilder) {
    this.cardForm = this.fb.group({
      cardNumber: ['', [Validators.required, Validators.pattern(/^\d{16}$/)]],
      expiryDate: ['', [Validators.required, Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/)]],
      cvv: ['', [Validators.required, Validators.pattern(/^\d{3,4}$/)]],
      cardholderName: ['', Validators.required],
    });

    this.addressForm = this.fb.group({
      line1: [this.billingAddress.line1, Validators.required],
      city: [this.billingAddress.city, Validators.required],
      state: [this.billingAddress.state],
      zip: [this.billingAddress.zip, Validators.required],
      country: [this.billingAddress.country, Validators.required],
    });
  }

  saveCard(): void {
    if (this.cardForm.valid) {
      this.editingCard = false;
      this.cardForm.reset();
    }
  }

  saveAddress(): void {
    if (this.addressForm.valid) {
      const v = this.addressForm.value;
      this.billingAddress = { ...v };
      this.editingAddress = false;
    }
  }

  cancelCard(): void {
    this.editingCard = false;
    this.cardForm.reset();
  }

  cancelAddress(): void {
    this.editingAddress = false;
    this.addressForm.patchValue(this.billingAddress);
  }
}
