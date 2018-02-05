import Component from '@ember/component';

export default Component.extend({
  actions: {
    save(e) {
      e.preventDefault();

      this.onsubmit(this.list, this.title);
      this.set('list', '');
      this.set('title', '');
    }
  }
});
