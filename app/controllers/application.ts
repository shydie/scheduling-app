import Controller from "@ember/controller";
import RouterService from "@ember/routing/router-service";
import { inject } from "@ember/service";

interface NavItem {
  title: string,
  route: string,
}
export default class Application extends Controller {
  @inject('router')
  router!: RouterService

  navItems: NavItem[] = [
    {
      title: 'Clinician',
      route: '',
    },
    {
      title: 'Select a service',
      route: 'services.index',
    },
    {
      title: 'Select location',
      route: 'services.locations',
    }
  ]
}
