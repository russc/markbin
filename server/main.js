import { Meteor } from 'meteor/meteor';
import { Bins } from '../imports/collections/bins';

Meteor.startup(() => {
  Meteor.publish('bins', function () {
    // this is available because we used a normal anon function
    return Bins.find({ ownerId: this.userId });
  });
});
