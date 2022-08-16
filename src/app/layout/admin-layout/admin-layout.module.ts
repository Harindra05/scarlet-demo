import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutRoutingModule } from './admin-layout-routing.module';
import { AdminLayoutComponent } from './admin-layout.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AboutComponent, AppointmmentComponent, ContactUsComponent, DashboardComponent, FavoriteSaloonsListComponent, PrivacyPolicyComponent, SalonsSpecialistComponent, SchedulesComponent,SpecialistViewComponent, TermsConditionComponent } from 'src/app/components/full-layout/full-layout';
import { RouterModule } from '@angular/router';
import { EditSaloonProfileComponent, MoreComponent, RateSalonComponent, SettingsComponent, TransactionListComponent } from 'src/app/components/full-layout/more/more';
import { UpcomingAppointmentComponent, UserAppointmentComponent } from 'src/app/components/full-layout/user-side/user';



@NgModule({
  declarations: [
    AdminLayoutComponent,
    AppointmmentComponent,
    DashboardComponent,
    SalonsSpecialistComponent,
    SchedulesComponent,
    MoreComponent,
    SpecialistViewComponent,
    SettingsComponent,
    TransactionListComponent,
    FavoriteSaloonsListComponent,
    RateSalonComponent,
    UpcomingAppointmentComponent,
    AboutComponent,
    ContactUsComponent,
    PrivacyPolicyComponent,
    TermsConditionComponent,
    UserAppointmentComponent,
    EditSaloonProfileComponent,

  ],
  imports: [
    CommonModule,
    AdminLayoutRoutingModule,
    SharedModule,
    RouterModule
  ]
})
export class AdminLayoutModule { }
