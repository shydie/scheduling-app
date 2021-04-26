import ArrayProxy from '@ember/array/proxy';
import Route from '@ember/routing/route';
import { hash } from 'rsvp';
import office from 'scheduling-app/models/office';

interface RequestParams {
  cptCodeId: string
  clinicianId: string
}

interface LocationsModel {
  offices: ArrayProxy<office>
}

export default class Locations extends Route {
  queryParams = {
    cptCodeId: {
      refreshModel: true
    },
    clinicianId: {
      refreshModel: true
    }
  };

  model({ clinicianId, cptCodeId }: RequestParams): Promise<LocationsModel> {
    return hash({
      offices: this.store.query('office', { filter: { clinicianId, cptCodeId }})
    })
  }
}
