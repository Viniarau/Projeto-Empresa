import HttpService from './http.service';

export default class AppService {
  constructor(props) {
    this.api = new HttpService(props);
  }
  postOccurences = (payload, success, errorCallback) => {
    this.api
      .post('/', payload)
      .then((response) => success(response))
      .catch((error) => errorCallback(error));
  };
  getOccurences = (success, errorCallback) => {
    this.api
      .get('/')
      .then((response) => success(response))
      .catch((error) => errorCallback(error));
  };
}
