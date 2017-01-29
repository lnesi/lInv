import { BrowserModule }                 from '@angular/platform-browser';
import { NgModule }                      from '@angular/core';
import { FormsModule }                   from '@angular/forms';
import { HttpModule }                    from '@angular/http';
import { NgbModule }                     from '@ng-bootstrap/ng-bootstrap';
              
import { AppRouting }                    from './app.routes';
import { AppComponent }                  from './app.component';

//-- App components
import { TopNavComponent }               from './components/topnav.component';
import { MainSideComponent }             from './components/mainside.component';

//--Pages
import {DashboardComponent}              from './pages/dashboard/dashboard.component';
import {ClientsComponent}                from './pages/clients/clients.component';
import {QuotesComponent}                 from './pages/quotes/quotes.component';
import {ProductsComponent}               from './pages/products/products.component';
import {PaymentsComponent}               from './pages/payments/payments.component';
import {ReportsComponent}                from './pages/reports/reports.component';
import {InvoicesComponent}               from './pages/invoices/invoices.component';
import {ProfileComponent}                from './pages/profile/profile.component';
import {ErrorComponent}                  from './pages/error/error.component';

//Pages System

import {CustomFieldsComponent}          from './pages/settings/custom_fields/custom_fields.component';
import {EmailTemplatesComponent}        from './pages/settings/email_templates/email_templates.component';
import {ImportComponent}                from './pages/settings/import/import.component';
import {PaymentMethodsComponent}        from './pages/settings/payment_methods/payment_methods.component';
import {SystemSettingsComponent}        from './pages/settings/system/system_settings.component';
import {TaxRatesComponent}              from './pages/settings/tax_rates/tax_rates.component';
import {UsersComponent}                 from './pages/settings/users/users.component';
import {EditUserComponent}              from './pages/settings/users/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    MainSideComponent,
    DashboardComponent,
    QuotesComponent,
    ProductsComponent,
    PaymentsComponent,
    ReportsComponent,
    ClientsComponent,
    InvoicesComponent,
    ProfileComponent,
    CustomFieldsComponent,
    EmailTemplatesComponent,
    ImportComponent,
    PaymentMethodsComponent,
    SystemSettingsComponent,
    TaxRatesComponent,
    UsersComponent,
    EditUserComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    HttpModule,
    AppRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
