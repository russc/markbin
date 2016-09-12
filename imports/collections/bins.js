import { Mongo } from 'meteor/mongo';

// fat arrow functions bind to this.  That is why
// we can't use fat arrow here.  The value of this inside
// this function needs to be determined at runtime.
Meteor.methods({
  'bins.insert': function () {
    return Bins.insert({
      createdAt: new Date(),
      content: '',
      sharedWith: [],
      ownerId: this.userId,
    });
  },

  'bins.remove': function (bin) {
    return Bins.remove(bin);
  },

  'bins.update': function (bin, content) {
    return Bins.update(bin._id, { $set: { content } });
  },

  'bins.share': function (bin, email) {
    return Bins.update(bin._id, { $push: { sharedWith: email } });
  },
});

export const Bins = new Mongo.Collection('bins');
