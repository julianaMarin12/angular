import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { NewsComponent } from './news/news.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { ClientsComponent } from './clients/clients.component';
import { CrmComponent } from './crm/crm.component';
import { ErpComponent } from './erp/erp.component';
import { EmployeeComponent } from './employee/employee.component';
import { ProjectsComponent } from './projects/projects.component';
import { GitGithubComponent } from './git-github/git-github.component';
import { SalesComponent } from './sales/sales.component';
import { ContactsComponent } from './contacts/contacts.component';
import { CustomerServiceComponent } from './customer-service/customer-service.component';
import { ProductionComponent } from './production/production.component';
import { FinancialComponent } from './financial/financial.component';
import { HrComponent } from './hr/hr.component';
import { AppRoutingModule } from './app-routing.module'; // Importa AppRoutingModule aquí

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    ContactComponent,
    NewsComponent,
    MyAccountComponent,
    ClientsComponent,
    CrmComponent,
    ErpComponent,
    EmployeeComponent,
    ProjectsComponent,
    GitGithubComponent,
    SalesComponent,
    ContactsComponent,
    CustomerServiceComponent,
    ProductionComponent,
    FinancialComponent,
    HrComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
