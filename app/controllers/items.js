import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    saveItem(list, title) {
      let card = this.store.createRecord('item', {list, title});

      card.save();
    },
    updateItem(list, item) {
      item.set('list', list);
      item.save();
    }
  }
});
