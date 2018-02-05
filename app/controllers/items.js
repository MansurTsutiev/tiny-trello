import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    saveItem(title, list) {
      let card = this.store.createRecord('item', {title, list});

      card.save();
    },
    updateItem(list, item) {
      console.log(item);
      item.set('list', list);
      item.save();
    }
  }
});
