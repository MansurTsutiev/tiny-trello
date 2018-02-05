import Component from '@ember/component';

export default Component.extend({
  actions: {
    toggleForm() {
      this.set('clicked', true);
    },
    saveItem(e) {
      e.preventDefault();
      this.onsubmit(this.title, this.list);
      this.set('title', '');
      this.set('clicked', false);
    }

  }
});
