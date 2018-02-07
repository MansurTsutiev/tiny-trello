import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('items', {path: '/'}, function() {
    this.route('detail', {path: '/:item_id/detail'});
  });
});

export default Router;
