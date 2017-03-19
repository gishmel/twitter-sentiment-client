import {Router} from 'aurelia-router';
import {WebGateway} from '../services/webGateway';
import {Facility} from '../services/facility';

export class Result {
  static inject = [Router, WebGateway, Facility];

  constructor(router, webgateway, facility) {
    this.router = router;
    this.webgateway = webgateway;
    this.facility = facility;
  }

  async activate(params) {
    let url = `${this.webgateway.serverconfig.server_url}/tweets/archive/?q=${params.query}`;
    let response = await this.webgateway.client.fetch(url, {
      method: 'GET'
    });
    this.tweets = [];
    response.map((obj) => {
      this.tweets = this.tweets.concat(obj.tweets);
    });
  }

}
