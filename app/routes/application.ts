import Route from '@ember/routing/route';
import ENV from 'scheduling-app/config/environment';

export default class IndexRoute extends Route {
  isClinicianInProgress = true;

  redirect() {
    if (this.isClinicianInProgress) {
      this.transitionTo('services',  { queryParams: { clinicianId: ENV.clinicianId } });
    }
  }
}
