import JSONAPIAdapter from '@ember-data/adapter/json-api';
import ENV from 'scheduling-app/config/environment';

const SKIP_CORS = 'https://cors-anywhere.herokuapp.com';

export default class ApplicationAdapter extends JSONAPIAdapter {
  host =  `${SKIP_CORS}/${ENV.host}`;
  namespace = 'client-portal-api';
  headers = {
    'Accept': 'application/vnd.api+json',
    'Api-Version': '2020-01-01',
    'Application-Build-Version': '0.0.1',
    'Application-Platform': 'web'
  };
}
