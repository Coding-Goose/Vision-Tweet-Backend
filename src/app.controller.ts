import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { AppService, Tweet } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return 'Hallo Vision';
  }

  @Get('tweets')
  getTweets(): Tweet[] {
    return this.appService.getTweets();
  }

  @Get('tweets/:id')
  getTweet(@Param('id') id: number): Tweet {
    return this.appService.getTweet(id);
  }

  @Delete('tweets/:id')
  deleteTweet(@Param('id') id: number): number {
    return this.appService.deleteTweet(id);
  }

  @Post('tweets')
  createTweet(@Body() tweet: Tweet): Tweet {
    return this.appService.addTweet(tweet);
  }
}
