import ArrayProxy from '@ember/array/proxy';
import Route from '@ember/routing/route';
import { hash } from 'rsvp';
import CptCode from 'scheduling-app/models/cpt-code';

export const CLINICIAN_ID = '2';

export interface ServicesModel {
  cptCodes: ArrayProxy<CptCode>
}

export default class Services extends Route {
  model(): Promise<ServicesModel> {
    return hash({
      cptCodes: this.store.query('cpt-code', { filter: { clinicianId: CLINICIAN_ID }})
    })
  }
}
