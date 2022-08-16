import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoreComponent } from 'src/app/components/full-layout/more/more.component';
import { AboutComponent, AppointmmentComponent, ContactUsComponent, DashboardComponent, FavoriteSaloonsListComponent, SalonsSpecialistComponent, SchduleAppointmentComponent, SchedulesComponent, SpecialistViewComponent, TermsConditionComponent } from 'src/app/components/full-layout/full-layout';
import { AdminLayoutComponent } from './admin-layout.component';
import { EditSaloonProfileComponent, RateSalonComponent, ReviewRatingComponent, SettingsComponent, TransactionListComponent } from 'src/app/components/full-layout/more/more';
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
      path: 'favorite-list',
      component: FavoriteSaloonsListComponent
    },
    {
      path: 'about',
      component:AboutComponent 
    },
    {
      path: 'terms-condition',
      component: TermsConditionComponent
    },
    {
      path: 'privacy-policy',
      component: TermsConditionComponent
    },
    {
      path: 'contact-us',
      component: ContactUsComponent
    },
    {
      path: 'review-rating',
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
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminLayoutRoutingModule { }
