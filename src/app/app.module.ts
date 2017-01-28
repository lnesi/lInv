import { BrowserModule }   from '@angular/platform-browser';
import { NgModule }        from '@angular/core';
import { FormsModule }     from '@angular/forms';
import { HttpModule }      from '@angular/http';
import { NgbModule }       from '@ng-bootstrap/ng-bootstrap';

import { AppRouting }      from './app.routes';
import { AppComponent }    from './app.component';

//-- App components
import { TopNavComponent }   from './components/topnav.component';
import { MainSideComponent } from './components/mainside.component';

//--Pages
import {DashboardComponent}  from './pages/dashboard/dashboard.component';
import {ClientsComponent}    from './pages/clients/clients.component';
import {QuotesComponent}     from './pages/quotes/quotes.component';
import {ProductsComponent}   from './pages/products/products.component';
import {PaymentsComponent}   from './pages/payments/payments.component';
import {ReportsComponent}    from './pages/reports/reports.component';
import {InvoicesComponent}   from './pages/invoices/invoices.component';
import {ProfileComponent}   from './pages/profile/profile.component';
import {ErrorComponent}      from './pages/error/error.component';

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
