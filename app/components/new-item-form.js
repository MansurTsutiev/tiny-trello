import Component from '@ember/component';

export default Component.extend({
  actions: {
    toggleForm() {
      this.set('clicked', true);
    },
    saveItem(e) {
      e.preventDefault();
      this.onsubmit(this.list, this.title);
      this.set('title', '');
      this.set('clicked', false);
    }

  }
});
