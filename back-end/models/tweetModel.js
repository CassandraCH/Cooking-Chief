//const TweetModel {
//    id:number,              // id tweet
//    nom: string,            // user.name
//    arobase: string,        // user.screen_name
//    photoDeProfil: string,  // user.profile_image_url
//    texte: string,          // text
//    favs: number,           //favorite_count
//    rts: number,            // retweet_count
//}

const Twitter = require('twitter');

const client = new Twitter({
    consumer_key: 'EuKQfwTijUYZBkSxmgqoPir6F',
    consumer_secret: 'xVYQgEZN4L1VYBszUStZEiH6VhjJbMyeQyAzMYB0TwR0bDU9Sg',
    access_token_key: '1359508421301727232-DUalWqDuPUC21F9xd9AZ8LKrQgMVW8',
    access_token_secret: 'k7Z60xBmdUFFiLvQkM3yU9KayhvCTQhwvd2pVjho9Ll5s'
  });

var params = {screen_name: 'cooking chief'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
      console.log(tweets);
    response.send(tweets);
  }
});

module.exports = Twitter.model('userTweets',Tweets);