import { ModuleWithProviders } 	from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} 	from './pages/dashboard/dashboard.component';
import {ClientsComponent} 		from './pages/clients/clients.component';
import {QuotesComponent} 		from './pages/quotes/quotes.component';
import {ProductsComponent} 		from './pages/products/products.component';
import {PaymentsComponent} 		from './pages/payments/payments.component';
import {ReportsComponent} 		from './pages/reports/reports.component';
import {InvoicesComponent} 		from './pages/invoices/invoices.component';
import {ProfileComponent} 		from './pages/profile/profile.component';
import {ErrorComponent} 		from './pages/error/error.component';

const appRoutes:Routes=[
	{ path: '' , redirectTo: 'dashboard' , pathMatch: 'full' },
	{ path: 'dashboard' , 	component: DashboardComponent },
	{ path: 'clients' , 	component: ClientsComponent },
	{ path: 'quotes' , 		component: QuotesComponent },
	{ path: 'products' , 	component: ProductsComponent },
	{ path: 'payments' , 	component: PaymentsComponent },
	{ path: 'reports' , 	component: ReportsComponent },
	{ path: 'invoices' , 	component: InvoicesComponent },
	{ path: 'profile' , 	component: ProfileComponent },
	{ path: '**', 			component: ErrorComponent }
];


export const AppRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes); 