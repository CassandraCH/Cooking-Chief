const Twitter = require('twit');

const client = new Twitter({
    consumer_key: 'EuKQfwTijUYZBkSxmgqoPir6F',
    consumer_secret: 'xVYQgEZN4L1VYBszUStZEiH6VhjJbMyeQyAzMYB0TwR0bDU9Sg',
    access_token: '1359508421301727232-DUalWqDuPUC21F9xd9AZ8LKrQgMVW8',
    access_token_secret: 'k7Z60xBmdUFFiLvQkM3yU9KayhvCTQhwvd2pVjho9Ll5s'
  });

const params = { q: '#cooking_chief'};
client.get('search/tweets', params, function(error, data, response) {
  const tweets = data.statuses

  console.log(tweets);
  });

//=============================================================================================
// import needle from '../node_modules/needle';

// let twitterBtn = document.querySelector("#btnTwitter");
// twitterBtn.addEventListener("click", getRequest);

// // The code below sets the bearer token from your environment variables
// // To set environment variables on macOS or Linux, run the export command below from the terminal:
// const BEARER_TOKEN= 'AAAAAAAAAAAAAAAAAAAAAAnyNQEAAAAAULjElNBEIkcf8F08BFNnZd8K6P8%3D36aDwblBgbGpGyf7tKdnS8bJqB8VwRvdLZX3VMFM6L0ZN8PRMF';
// // const token = process.env.BEARER_TOKEN;

// const endpointURL = "https://api.twitter.com/2/tweets?ids=";

// async function getRequest() {
//     console.log("test")

//     // These are the parameters for the API request
//     // specify Tweet IDs to fetch, and any additional fields that are required
//     // by default, only the Tweet ID and text are returned
//     const params = {
//         "ids": "1278747501642657792,1255542774432063488", // Edit Tweet IDs to look up
//         "tweet.fields": "lang,author_id", // Edit optional query parameters here
//         "user.fields": "created_at" // Edit optional query parameters here
//     }

//     // this is the HTTP header that adds bearer token authentication
//     const res = await needle('get', endpointURL, params, {
//         headers: {
//             "User-Agent": "v2TweetLookupJS",
//             "authorization": `Bearer ${BEARER_TOKEN}`
//         }
//     })

//     if (res.body) {
//         return res.body;
//     } else {
//         throw new Error('Unsuccessful request');
//     }
// }

// (async () => {

//     try {
//         // Make request
//         const response = await getRequest();
//         console.log(response);

//     } catch (e) {
//         console.log(e);
//         process.exit(-1);
//     }
//     process.exit();
// })();

//=============================================================================================
// let twitterBtn = document.querySelector("#btnTwitter");
// twitterBtn.addEventListener("click", fetchPosts);

// const consumer_key =  'EuKQfwTijUYZBkSxmgqoPir6F';
// const consumer_secret = 'xVYQgEZN4L1VYBszUStZEiH6VhjJbMyeQyAzMYB0TwR0bDU9Sg';
// const access_token = '1359508421301727232-DUalWqDuPUC21F9xd9AZ8LKrQgMVW8';
// const access_token_secret = 'k7Z60xBmdUFFiLvQkM3yU9KayhvCTQhwvd2pVjho9Ll5s';

// const url = 'https://api.twitter.com/1.1/search/tweets.json?q=nasa&result_type=popular' ;

// const header = {
//   authorization: oauth_consumer_key = consumer_key,
//   oauth_nonce="generated-nonce", oauth_signature="generated-signature",
//   oauth_signature_method="HMAC-SHA1", oauth_timestamp="generated-timestamp",
//   oauth_token=access_token, oauth_version="1.0"
// };

// async function fetchPosts() {
//     console.log("Recherche lancée ! ");
//     let responseData = await requeteApi(); // J'appelle la méthode requeteApi()
//     // Ma variable sera initialisé une fois que la requêtes est terminée

//     console.log(responseData);
// }


// async function requeteApi(){

//    return fetch(url, header).then(response => {
//         // Si ma réponse est valide autrement dit renvoi 200 la requêtes est transformée en json et retourner
//         if ( response.status >= 200 && response.status < 300 ){
//             return response.json();
//         }else {
//             // Sinon on lance une erreur
//             return  new Error('Erreur durant le chargement - coté serveur');
//         }
//     })
//     .catch(error => {
//         alert(error);
//         throw new Error('Erreur durant le chargement');
//     });

// }



//=============================================================================================

// import { TwitterClient } from 'twitter-api-client';

// const twitterClient = new TwitterClient({
//   apiKey: 'EuKQfwTijUYZBkSxmgqoPir6F',
//   apiSecret: 'xVYQgEZN4L1VYBszUStZEiH6VhjJbMyeQyAzMYB0TwR0bDU9Sg',
//   accessToken: '1359508421301727232-DUalWqDuPUC21F9xd9AZ8LKrQgMVW8',
//   accessTokenSecret: 'k7Z60xBmdUFFiLvQkM3yU9KayhvCTQhwvd2pVjho9Ll5s',
// });

// // Search for a user
// const data = await twitterClient.accountsAndUsers.usersSearch({ q: 'twitterDev' });

// // Get message event by Id
// const data = await twitterClient.directMessages.directMessagesEventsShow({ id: '1234' });

// // Get most recent 25 retweets of a tweet
// const data = await twitterClient.tweets.statusesRetweetsById({ id: '12345', count: 25 });

// // Get local trends
// const data = await twitterClient.trends.trendsAvailable();