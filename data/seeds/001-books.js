exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('books')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('books').insert([
        {
          title:
            'God Rest Ye Merry: Why Christmas Is The Foundation For Everyting',
          author: 'Douglas Wilson',
          pages: 154,
        },
        {title: 'The Hobbit', author: 'J.R.R. Tolkein', pages: 300},
        {
          title:
            'Economics In One Lession: The Shortest and Surest Way to Understand Basic Economics',
          author: 'Henry Hazlit',
          pages: 218,
        },
      ]);
    });
};
