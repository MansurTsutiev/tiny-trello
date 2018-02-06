import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    updateItem(title, description) {
      this.model.setProperties({title: title, description: description});
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
