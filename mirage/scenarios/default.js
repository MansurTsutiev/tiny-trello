export default function(server) {

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */

  // server.createList('post', 10);

  server.create('item', {
    title: 'Ruby',
    list: 'BackLog'
  });
  server.create('item', {
    title: 'Rails',
    list: 'BackLog'
  });
  server.create('item', {
    title: 'Ember',
    list: 'Next'
  });
  server.create('item', {
    title: 'Bloomberg',
    list: 'Next'
  });
}
