
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('books').del()
    .then(function () {
      // Inserts seed entries
      return knex('books').insert([
        {id: 1, title: 'Talion: The Revenant from DB', author: 'Michael A. stackpole'},
        {id: 2, title: 'Ready Player One from DB', author:'Ernest Cline'},
        {id: 3, title: 'Enders Game from DB', author: 'Orson Scott Card'}
      ]);
    });
};
