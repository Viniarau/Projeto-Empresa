/* eslint-disable prettier/prettier */
import axios from 'axios';
import environment from '../config/environment.config';
// import NavigationService from './navigation.service';
// import STATUS from '../constants/http-status.constant';

class HttpService {
  constructor(props) {
    let service = axios.create({
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Global axios defaults
    service.defaults.baseURL =
      environment.baseUrl[environment.currentEnvironment].urlApi;

    service.interceptors.response.use(this.handleSuccess, this.handleError);

    this.service = service;
    this.props = props;
  }

  handleSuccess(response) {
    return response;
  }

  handleError = error => {
    // if (error.response.status === STATUS.UNAUTHORIZED) {
    //   NavigationService.navigate('Autenticacao', {});
    // }

    return Promise.reject(error);
  };

  redirectTo = path => {
    this.props.navigation.navigate(path);
  };

  get(path, payload) {
    return this.service.get(path, payload);
  }

  put(path, payload) {
    return this.service.put(path, payload);
  }

  patch(path, payload) {
    return this.service.patch(path, payload);
  }

  post(path, payload) {
    return this.service.post(path, payload);
  }

  delete(path) {
    return this.service.delete(path);
  }
}

export default HttpService;
