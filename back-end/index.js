// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://YCGManager:CookingChief@cookingchief.1si4k.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });


const MongoClient = require('mongodb').MongoClient;
// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb+srv://YCGManager:CookingChief@cookingchief.1si4k.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
async function run() {
  try {
    await client.connect();
    const database = client.db("sample_mflix");
    const movies = database.collection("movies");
    // Query for a movie that has the title 'The Room'
    // const query = { title: "The Poor Little Rich Girl" };
    const query = { year: 1914 };
    const options = {
      // sort matched documents in descending order by rating
      sort: { rating: -1 },
      // Include only the `title` and `imdb` fields in the returned document
      projection: { _id: 0, title: 1, imdb: 1, year: 1 },
    };
    const movie = await movies.findOne(query, options);
    // since this method returns the matched document, not a cursor, print it directly
    console.log(movie);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);