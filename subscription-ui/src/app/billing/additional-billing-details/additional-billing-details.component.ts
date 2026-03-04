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
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-additional-billing-details',
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        MatDividerModule,
        MatSelectModule,
        MatSlideToggleModule,
        MatSnackBarModule,
    ],
    templateUrl: './additional-billing-details.component.html',
    styleUrl: './additional-billing-details.component.scss'
})
export class AdditionalBillingDetailsComponent {
  editingEmail = false;
  editingTax = false;
  editingBudget = false;

  billingEmail = 'billing@my-organization.com';
  emailEditValue = this.billingEmail;

  taxInfo = {
    taxId: 'US-12-3456789',
    businessName: 'My Organization Inc.',
    taxExempt: false,
  };

  budgetAlert = {
    enabled: true,
    threshold: 2000,
    notifyEmail: true,
    notifySlack: false,
  };

  taxForm: FormGroup;
  budgetForm: FormGroup;

  taxTypes = ['EIN (US)', 'VAT (EU)', 'GST (AU/CA)', 'ABN (AU)', 'Other'];

  constructor(private fb: FormBuilder, private snackBar: MatSnackBar) {
    this.taxForm = this.fb.group({
      taxId: [this.taxInfo.taxId, Validators.required],
      businessName: [this.taxInfo.businessName, Validators.required],
      taxExempt: [this.taxInfo.taxExempt],
    });

    this.budgetForm = this.fb.group({
      enabled: [this.budgetAlert.enabled],
      threshold: [this.budgetAlert.threshold, [Validators.required, Validators.min(1)]],
      notifyEmail: [this.budgetAlert.notifyEmail],
      notifySlack: [this.budgetAlert.notifySlack],
    });
  }

  saveEmail(): void {
    if (this.emailEditValue.trim()) {
      this.billingEmail = this.emailEditValue;
      this.editingEmail = false;
      this.snackBar.open('Billing email updated.', 'Dismiss', { duration: 3000 });
    }
  }

  cancelEmail(): void {
    this.emailEditValue = this.billingEmail;
    this.editingEmail = false;
  }

  saveTax(): void {
    if (this.taxForm.valid) {
      this.taxInfo = { ...this.taxInfo, ...this.taxForm.value };
      this.editingTax = false;
      this.snackBar.open('Tax information saved.', 'Dismiss', { duration: 3000 });
    }
  }

  cancelTax(): void {
    this.taxForm.patchValue(this.taxInfo);
    this.editingTax = false;
  }

  saveBudget(): void {
    if (this.budgetForm.valid) {
      this.budgetAlert = { ...this.budgetAlert, ...this.budgetForm.value };
      this.editingBudget = false;
      this.snackBar.open('Budget alert settings saved.', 'Dismiss', { duration: 3000 });
    }
  }

  cancelBudget(): void {
    this.budgetForm.patchValue(this.budgetAlert);
    this.editingBudget = false;
  }
}
