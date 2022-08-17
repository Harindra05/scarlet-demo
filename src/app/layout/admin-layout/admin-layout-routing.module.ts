import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoreComponent } from 'src/app/components/full-layout/more/more.component';
import {  AppointmmentComponent, DashboardComponent,
   PaymentComponent,
   SalonsSpecialistComponent, SchduleAppointmentComponent, 
    SpecialistViewComponent,  } from 'src/app/components/full-layout/full-layout';
import { AdminLayoutComponent } from './admin-layout.component';
import { AboutComponent, ContactUsComponent, EditSaloonProfileComponent,FavoriteSaloonsListComponent, PrivacyPolicyComponent, RateSalonComponent, ReviewRatingComponent, SchedulesComponent, ServiceComponent, SettingsComponent, TermsConditionComponent, TransactionListComponent } from 'src/app/components/full-layout/more/more';
import { UpcomingAppointmentComponent, UserAppointmentComponent } from 'src/app/components/full-layout/user-side/user';

const routes: Routes = [{
  path: '',
  component: AdminLayoutComponent,
  children: [
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full'
    },
    {
      path: 'dashboard',
      component: DashboardComponent
    },
    {
      path: 'appointment',
      component: AppointmmentComponent
    },
    {
      path: 'salons-and-specialist',
      component: SalonsSpecialistComponent
    },
    {
      path: 'schedule-appointement',
      component: SchduleAppointmentComponent
    },
    {
      path: 'specialist-view',
      component: SpecialistViewComponent
    },
    {
      path: 'schedules',
      component: SchedulesComponent
    },
    {
      path: 'payment',
      component: PaymentComponent
    },
    {
      path: 'more',
      component: MoreComponent
    },
    {
      path: 'more/settings',
      component: SettingsComponent
    },
    {
      path: 'more/transaction-list',
      component: TransactionListComponent
    },
    {
      path: 'more/favorite-list',
      component: FavoriteSaloonsListComponent
    },
    {
      path: 'more/about',
      component:AboutComponent 
    },
    {
      path: 'more/terms-condition',
      component: TermsConditionComponent
    },
    {
      path: 'more/privacy-policy',
      component: PrivacyPolicyComponent
    },
    {
      path: 'more/contact-us',
      component: ContactUsComponent
    },
    {
      path: 'more/review-rating',
      component: ReviewRatingComponent
    },
    {
      path: 'rate-salon',
      component: RateSalonComponent
    },
    {
      path: 'upcoming-appointment',
      component: UpcomingAppointmentComponent
    },
    {
      path: 'user-appointment',
      component: UserAppointmentComponent
    },
    {
      path: 'more/edit-profile',
      component: EditSaloonProfileComponent
    },
    {
      path: 'more/services',
      component: ServiceComponent
    },
 
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminLayoutRoutingModule { }
