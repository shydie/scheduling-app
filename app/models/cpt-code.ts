import Model, { attr } from '@ember-data/model';

export default class extends Model {
  @attr('string')
  description!: string

  @attr('number')
  duration!: number
};
