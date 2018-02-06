import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    updateItem(description) {
      this.model.setProperties({description: description});
      this.model.save();
      this.transitionToRoute('items');
    },
    deleteItem() {
      this.model.destroyRecord()
        .then( () => {
          this.transitionToRoute('items');
        });
    }
  }
});
