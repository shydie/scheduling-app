import JSONAPIAdapter from '@ember-data/adapter/json-api';

const SKIP_CORS = 'https://cors-anywhere.herokuapp.com';
const HOST = 'https://johnny-appleseed.clientsecure.me'

export default class ApplicationAdapter extends JSONAPIAdapter {
  host =  `${SKIP_CORS}/${HOST}`;
  namespace = 'client-portal-api';
  headers = {
    'Accept': 'application/vnd.api+json',
    'Api-Version': '2020-01-01',
    'Application-Build-Version': '0.0.1',
    'Application-Platform': 'web'
  };
}
