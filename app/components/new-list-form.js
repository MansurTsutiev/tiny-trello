import Component from '@ember/component';

export default Component.extend({
  actions: {
    save(e) {
      e.preventDefault();

      this.onsubmit(this.title, this.list);
      this.set('clicked', false);
      this.set('list', '');
      this.set('title', '');
    },
    toggleForm() {
      this.set('clicked', true);
    }
  }
});
