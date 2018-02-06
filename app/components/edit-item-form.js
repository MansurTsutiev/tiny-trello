import Component from '@ember/component';

export default Component.extend({
  actions: {
    save(e) {
      e.preventDefault();
      this.onsubmit(this.description);
    },
    deleteItem(e) {
      e.preventDefault();
      this.onclick();
    }
  }
});
