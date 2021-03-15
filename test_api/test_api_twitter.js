var Twitter = require('twit');

var client = new Twitter({
    consumer_key: 'EuKQfwTijUYZBkSxmgqoPir6F',
    consumer_secret: 'xVYQgEZN4L1VYBszUStZEiH6VhjJbMyeQyAzMYB0TwR0bDU9Sg',
    access_token: '1359508421301727232-DUalWqDuPUC21F9xd9AZ8LKrQgMVW8',
    access_token_secret: 'k7Z60xBmdUFFiLvQkM3yU9KayhvCTQhwvd2pVjho9Ll5s'
  });

var params = { q: '#cooking_chief'};
client.get('search/tweets', params, function(error, data, response) {
  const tweets = data.statuses
  .map(tweet => tweet.text);

  console.log(tweets);
  });
