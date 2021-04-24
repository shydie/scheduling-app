import Model, { attr } from '@ember-data/model';
import { fragment } from 'ember-data-model-fragments/attributes';

export default class extends Model {
  @attr('string')
  name!: string

  @attr('string')
  phone!: string

  @attr('boolean')
  isVideo!: boolean

  @attr('boolean')
  isPublic!: boolean

  @fragment('fragments/geolocation')
  geolocation!: Geolocation;
};
