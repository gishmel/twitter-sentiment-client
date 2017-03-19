import {HttpClient, json} from 'aurelia-fetch-client';
import {ServerConfig} from './serverConfig';

export class WebGateway {
  static inject = [ServerConfig];
  constructor(serverconfig) {
    this.serverconfig = serverconfig;
    this.url = serverconfig.server_url;
    this.client = new HttpClient().configure(config => {
      config
        .withBaseUrl(this.url)
        .withDefaults({
          headers: {
            'Accept': 'application/json',
            'X-Requested-With': 'Fetch',
            'Content-Type': 'application/json'
          }
        })
        .rejectErrorResponses()
        .withInterceptor({
          request(request) {
            return request;
          },
          response(response) {
            return response.json();
          }
        });
    });
  }
}
