import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  isClinicianInProgress = true;

  redirect() {
    if (this.isClinicianInProgress) {
      this.transitionTo('services');
    }
  }
}
