import ArrayProxy from '@ember/array/proxy';
import Route from '@ember/routing/route';
import { hash } from 'rsvp';
import CptCode from 'scheduling-app/models/cpt-code';
import ENV from 'scheduling-app/config/environment';

export interface ServicesModel {
  cptCodes: ArrayProxy<CptCode>
}

export interface RequestParams {
  clinicianId: string
}

export const clinicianId = ENV.clinicianId;

export default class Services extends Route {
  queryParams = {
    clinicianId: {
      refreshModel: true
    }
  }

  model({ clinicianId }: RequestParams): Promise<ServicesModel> {
    return hash({
      cptCodes: this.store.query('cpt-code', { filter: { clinicianId }})
    })
  }
}
