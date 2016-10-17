import Ember from 'ember';

//Ember controllers are just js objects
export default Ember.Controller.extend({
  //Object array with objects having their key value pairs (properties)
  chefs:[
    {name: 'Tencha', isAvailable: true},
    {name: 'Panfilo', isAvailable: false},
    {name: 'Johannes', isAvailable: true},
    {name: 'Hilde', isAvailable: true},
    {name: 'Yukino', isAvailable: false}
  ],

  //actions hash, holds all of our actions
  actions: {
    wasClicked(elementName){
      //string interpolation that happens with backticks and ${variable}
      alert(`${elementName} was clicked`);
    }
  }
  //When creating functions w/in controllers, function names can be left as anonymous, since we have the key value pairs


});
