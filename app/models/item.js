import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  list: DS.attr(),
  description: DS.attr()
});
