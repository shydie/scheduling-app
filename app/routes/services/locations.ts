import ArrayProxy from '@ember/array/proxy';
import Route from '@ember/routing/route';
import { hash } from 'rsvp';
import office from 'scheduling-app/models/office';
import { CLINICIAN_ID } from '../services';

interface RequestParams {
  service_id: string
}

interface ServicesLocationsModel {
  offices: ArrayProxy<office>
}

export default class ServicesLocations extends Route {
  model({ service_id }: RequestParams): Promise<ServicesLocationsModel> {
    return hash({
      offices: this.store.query('office', { filter: { clinicianId: CLINICIAN_ID, cptCodeId: service_id }})
    })
  }
}
