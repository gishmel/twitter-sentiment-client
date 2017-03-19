import {Router} from 'aurelia-router';
import {WebGateway} from '../services/webGateway';
import {Facility} from '../services/facility';

export class Search {
  static inject = [Router, WebGateway, Facility];

  constructor(router, webgateway, facility) {
    this.router = router;
    this.webgateway = webgateway;
    this.facility = facility;
    this.query = '';
  }

  async submit() {
    if (this.query != '') {
      let url = `${this.webgateway.serverconfig.server_url}/tweets/?q=${this.query}`;
      let response = await this.webgateway.client.fetch(url, {
        method: 'GET'
      });
      if (Array.isArray(response.statuses)) {
        this.facility.tweets = response.statuses;
        this.router.navigateToRoute('result', { query: this.query});
      }
    } else {
      console.log("Twitter API requires a search query that is not an empty string!");
    }
  }


}
