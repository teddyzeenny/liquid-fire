import Ember from "ember";

export default Ember.Component.extend({
  
  appendVersion: Ember.on('init', Ember.observer('value', function() {
    var versions = this.get('versions');
    if (!versions) {
      this.set('versions', versions = []);
    }
    versions.pushObject(this.get('value'));
  }))
});
