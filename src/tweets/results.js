import {Router} from 'aurelia-router';
import {WebGateway} from '../services/webGateway';
import {Facility} from '../services/facility';

export class Results {
  static inject = [Router, WebGateway, Facility];

  constructor(router, webgateway, facility) {
    this.router = router;
    this.webgateway = webgateway;
    this.facility = facility;
    this.queries = [];
    this.url = `${this.webgateway.serverconfig.server_url}/tweets/archive`;
  }

  async getResults() {
    this.router.navigateToRoute('result', {query: this.query.text});
  }

  async activate() {
    let response = await this.webgateway.client.fetch(this.url, {
      method: 'GET'
    });
    this.queries = this.queries.concat(response);
  }
}
