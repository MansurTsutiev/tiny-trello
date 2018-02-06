import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    updateItem(list, description) {
      this.model.setProperties({list, title, description});
      this.model.save();
    },
    deleteItem() {
      this.model.destroyRecord()
        .then( () => {
          this.transitionToRoute('items');
        });
    }
  }
});
