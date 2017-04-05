module.exports = {
  _id: '_design/entities',
  indexes: {
    allusers: {
      analyzer: { name: 'standard' },
      index: (doc) => {
        index('default', doc._id);
        index('entity', doc.entity);
      }
    }
  }
};