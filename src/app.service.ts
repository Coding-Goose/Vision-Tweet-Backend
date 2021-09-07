import { Injectable } from '@nestjs/common';

export type Tweet = {
  id: number;
  message: string;
  user: string;
  avatarUrl: string;
  liked: boolean;
};

@Injectable()
export class AppService {
  tweets: Tweet[] = [
    {
      id: Math.random() * 10,
      message: 'Message Nummer2',
      user: 'User Nummer2',
      avatarUrl: 'https://picsum.photos/100?random=2',
      liked: false,
    },
  ];

  getTweets(): Tweet[] {
    return this.tweets;
  }

  getTweet(id: number) {
    return this.tweets.find((el) => el.id === id);
  }

  addTweet(tweet: Tweet): Tweet {
    this.tweets.push(tweet);
    return tweet;
  }

  deleteTweet(id: number): number {
    this.tweets = this.tweets.filter((el) => el.id != id);
    return id;
  }

  updateTweet(id: number, tweet: Tweet): Tweet {
    const toFind = this.tweets.find((el) => el.id == id);
    toFind.message = tweet.message;
    toFind.user = tweet.user;
    toFind.liked = tweet.liked;
    return toFind;
  }
}
