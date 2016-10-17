import Ember from 'ember';

//Routes can pass info to the controller - a hook is a function that is called by the framework, whenever this route is entered
//ember data knows how to use this and grab the data from firebase and populates it to app and db
export default Ember.Route.extend({
  model(){
    return this.store.findAll('chef');
 }
});
