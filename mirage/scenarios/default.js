export default function(server) {

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */

  // server.createList('post', 10);

  server.create('item', {
    title: 'Ruby',
    list: 'BackLog',
    description: 'Description 1'
  });
  server.create('item', {
    title: 'Rails',
    list: 'BackLog',
    description: 'Description 2'
  });
  server.create('item', {
    title: 'Ember',
    list: 'Next',
    description: 'Description 3'
  });
  server.create('item', {
    title: 'Bloomberg',
    list: 'Next',
    description: 'Description 4'
  });
}
