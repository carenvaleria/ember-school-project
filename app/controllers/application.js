import Ember from 'ember';

//Ember controllers are just js objects
export default Ember.Controller.extend({
  //Object array with objects having their key value pairs (properties)

  //actions hash, holds all of our actions
  actions: {
    makeUnavailable(chef){
      //ember.set takes 3 arguments, 1st is obj it's going to be acting on, 2nd is the property w/in obj, 3rd value set property to
      Ember.set(chef, 'isAvailable', false);
      chef.save();
    },

    makeAvailable(chef){
      Ember.set(chef, 'isAvailable', true);
      chef.save();
    }
  }
      //string interpolation that happens with backticks and ${variable}

  //When creating functions w/in controllers, function names can be left as anonymous, since we have the key value pairs});

});
