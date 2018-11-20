const bookshelf = require('./bookshelf');

class Book extends bookshelf.Model {
  get tableName() { return 'books'; }
  get hasTimestamps() { return true; }
}

module.exports = bookshelf.model('Book', Book);