"use strict";

// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://YCGManager:CookingChief@cookingchief.1si4k.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });
var MongoClient = require('mongodb').MongoClient; // Replace the uri string with your MongoDB deployment's connection string.


var uri = "mongodb+srv://YCGManager:CookingChief@cookingchief.1si4k.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
var client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

function run() {
  var database, movies, query, options, movie;
  return regeneratorRuntime.async(function run$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(client.connect());

        case 3:
          database = client.db("sample_mflix");
          movies = database.collection("movies"); // Query for a movie that has the title 'The Room'
          // const query = { title: "The Poor Little Rich Girl" };

          query = {
            year: 1914
          };
          options = {
            // sort matched documents in descending order by rating
            sort: {
              rating: -1
            },
            // Include only the `title` and `imdb` fields in the returned document
            projection: {
              _id: 0,
              title: 1,
              imdb: 1,
              year: 1
            }
          };
          _context.next = 9;
          return regeneratorRuntime.awrap(movies.findOne(query, options));

        case 9:
          movie = _context.sent;
          // since this method returns the matched document, not a cursor, print it directly
          console.log(movie);

        case 11:
          _context.prev = 11;
          _context.next = 14;
          return regeneratorRuntime.awrap(client.close());

        case 14:
          return _context.finish(11);

        case 15:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0,, 11, 15]]);
}

run()["catch"](console.dir);