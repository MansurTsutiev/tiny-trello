import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    saveItem(list, title) {
      let card = this.store.createRecord('item', {title, list});

      card.save();
    },
    updateItem(list, item) {
      item.set('list', list);
      item.save();
    }
  }
});
