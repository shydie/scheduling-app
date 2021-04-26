import Controller from "@ember/controller"

export default class Services extends Controller {
  queryParams = ['clinicianId'];

  clinicianId?: string;
}

