import { Routes } from '@angular/router';
import { BillingComponent } from './billing/billing.component';

export const routes: Routes = [
  { path: '', redirectTo: 'billing', pathMatch: 'full' },
  {
    path: 'billing',
    component: BillingComponent,
    children: [
      { path: '', redirectTo: 'payment-information', pathMatch: 'full' },
      {
        path: 'payment-information',
        loadComponent: () =>
          import('./billing/payment-information/payment-information.component').then(
            (m) => m.PaymentInformationComponent
          ),
      },
      {
        path: 'payment-history',
        loadComponent: () =>
          import('./billing/payment-history/payment-history.component').then(
            (m) => m.PaymentHistoryComponent
          ),
      },
      {
        path: 'additional-billing-details',
        loadComponent: () =>
          import(
            './billing/additional-billing-details/additional-billing-details.component'
          ).then((m) => m.AdditionalBillingDetailsComponent),
      },
    ],
  },
  { path: '**', redirectTo: 'billing' },
];
