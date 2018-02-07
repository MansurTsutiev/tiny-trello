import Component from '@ember/component';

export default Component.extend({


  actions: {
    save(e) {
      e.preventDefault();
      this.onsubmit(this.title, this.description);
    },
    confirmDeletion(e) {
      e.preventDefault();
      this.set('confirming', true);
      this.set('clicked', true);
    },
    deleteItem(e) {
      e.preventDefault();
      this.onclick();
    }
  }
});
