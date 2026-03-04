import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule } from '@angular/material/chips';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-billing',
    imports: [
        CommonModule,
        RouterOutlet,
        RouterLink,
        RouterLinkActive,
        MatSidenavModule,
        MatListModule,
        MatIconModule,
        MatToolbarModule,
        MatButtonModule,
        MatBadgeModule,
        MatDividerModule,
        MatChipsModule,
    ],
    templateUrl: './billing.component.html',
    styleUrl: './billing.component.scss'
})
export class BillingComponent {
  planName = 'GitHub Copilot Business';
  orgName = 'my-organization';
  activeSeats = 42;
  monthlySpend = 1764.0;

  navItems = [
    {
      label: 'Payment information',
      icon: 'credit_card',
      route: 'payment-information',
    },
    {
      label: 'Payment history',
      icon: 'receipt_long',
      route: 'payment-history',
    },
    {
      label: 'Additional billing details',
      icon: 'manage_accounts',
      route: 'additional-billing-details',
    },
  ];
}
