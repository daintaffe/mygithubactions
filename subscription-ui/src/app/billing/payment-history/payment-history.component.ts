import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';

export interface Invoice {
  id: string;
  date: Date;
  description: string;
  amount: number;
  status: 'paid' | 'pending' | 'failed';
  invoiceUrl: string;
}

@Component({
  selector: 'app-payment-history',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatTooltipModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
  ],
  templateUrl: './payment-history.component.html',
  styleUrl: './payment-history.component.scss',
})
export class PaymentHistoryComponent {
  displayedColumns = ['date', 'description', 'amount', 'status', 'actions'];
  filterStatus = 'all';

  invoices: Invoice[] = [
    {
      id: 'INV-2026-03',
      date: new Date('2026-03-01'),
      description: 'GitHub Copilot Business — 42 seats × Mar 2026',
      amount: 1764.0,
      status: 'paid',
      invoiceUrl: '#',
    },
    {
      id: 'INV-2026-02',
      date: new Date('2026-02-01'),
      description: 'GitHub Copilot Business — 42 seats × Feb 2026',
      amount: 1764.0,
      status: 'paid',
      invoiceUrl: '#',
    },
    {
      id: 'INV-2026-01',
      date: new Date('2026-01-01'),
      description: 'GitHub Copilot Business — 40 seats × Jan 2026',
      amount: 1680.0,
      status: 'paid',
      invoiceUrl: '#',
    },
    {
      id: 'INV-2025-12',
      date: new Date('2025-12-01'),
      description: 'GitHub Copilot Business — 38 seats × Dec 2025',
      amount: 1596.0,
      status: 'paid',
      invoiceUrl: '#',
    },
    {
      id: 'INV-2025-11',
      date: new Date('2025-11-01'),
      description: 'GitHub Copilot Business — 35 seats × Nov 2025',
      amount: 1470.0,
      status: 'failed',
      invoiceUrl: '#',
    },
    {
      id: 'INV-2025-10',
      date: new Date('2025-10-01'),
      description: 'GitHub Copilot Business — 35 seats × Oct 2025',
      amount: 1470.0,
      status: 'paid',
      invoiceUrl: '#',
    },
  ];

  get filteredInvoices(): Invoice[] {
    if (this.filterStatus === 'all') return this.invoices;
    return this.invoices.filter((i) => i.status === this.filterStatus);
  }

  totalPaid(): number {
    return this.invoices
      .filter((i) => i.status === 'paid')
      .reduce((s, i) => s + i.amount, 0);
  }
}
