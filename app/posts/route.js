import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.findAll('post')
    // return this.store.findAll('post', params.post_id);
  }
});
