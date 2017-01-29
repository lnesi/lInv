import { ModuleWithProviders } 			from '@angular/core';
import { Routes, RouterModule } 		from '@angular/router';
import {DashboardComponent} 			from './pages/dashboard/dashboard.component';
import {ClientsComponent} 				from './pages/clients/clients.component';
import {QuotesComponent} 				from './pages/quotes/quotes.component';
import {ProductsComponent} 				from './pages/products/products.component';
import {PaymentsComponent} 				from './pages/payments/payments.component';
import {ReportsComponent} 				from './pages/reports/reports.component';
import {InvoicesComponent} 				from './pages/invoices/invoices.component';
import {ProfileComponent} 				from './pages/profile/profile.component';
import {ErrorComponent} 				from './pages/error/error.component';
		
import {CustomFieldsComponent}  		from './pages/settings/custom_fields/custom_fields.component';
import {EmailTemplatesComponent}		from './pages/settings/email_templates/email_templates.component';
import {ImportComponent}  				from './pages/settings/import/import.component';
import {PaymentMethodsComponent}		from './pages/settings/payment_methods/payment_methods.component';
import {SystemSettingsComponent}		from './pages/settings/system/system_settings.component';
import {TaxRatesComponent}  			from './pages/settings/tax_rates/tax_rates.component';
import {UsersComponent}  				from './pages/settings/users/users.component';
import {EditUserComponent}  			from './pages/settings/users/edit.component';


const appRoutes:Routes=[
	{ path: '' , redirectTo: 'dashboard' , pathMatch: 'full' },
	{ path: 'dashboard' , 				component: DashboardComponent },
	{ path: 'clients' , 				component: ClientsComponent },
	{ path: 'quotes' , 					component: QuotesComponent },
	{ path: 'products' , 				component: ProductsComponent },
	{ path: 'payments' , 				component: PaymentsComponent },
	{ path: 'reports' , 				component: ReportsComponent },
	{ path: 'invoices' , 				component: InvoicesComponent },
	{ path: 'profile' , 				component: ProfileComponent },
	{ path: 'system/custom_fields' , 	component: CustomFieldsComponent },
	{ path: 'system/email_templates' , 	component: EmailTemplatesComponent },
	{ path: 'system/import' , 			component: ImportComponent },
	{ path: 'system/payment_methods' , 	component: PaymentMethodsComponent },
	{ path: 'system/settings' , 		component: SystemSettingsComponent },
	{ path: 'system/tax_rates' , 		component: TaxRatesComponent },
	{ path: 'system/users' , 			component: UsersComponent },
	{ path: 'system/users/edit/:id' , 	component: EditUserComponent },
	{ path: '**', 						component: ErrorComponent }
];


export const AppRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes); 