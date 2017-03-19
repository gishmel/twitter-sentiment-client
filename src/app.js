export class App {
  configureRouter(config, router) {
    config.title = 'Twitter Sentiments';
    config.map([
      { route: ['', 'search'], name: 'search', moduleId: './tweets/search', nav: true, title: 'Search' },
      { route: 'results', name: 'results', moduleId: './tweets/results', nav: true, title: 'Results' },
      { route: 'results/:query', name: 'result', moduleId: './tweets/result', nav: false, title: 'Result' }
    ])

    this.router = router;
  }
}
