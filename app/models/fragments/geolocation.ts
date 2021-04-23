import { attr } from '@ember-data/model';
import Fragment from 'ember-data-model-fragments/fragment';

export default class GeolocationFragment extends Fragment implements Geolocation {
  @attr('string')
  lat!: string;

  @attr('string')
  lng!: string;
}

export interface Geolocation {
  lat: string
  lng: string
}
