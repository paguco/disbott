# Disbott

## A bot for Discord

### Command List

You can find the latest command list here: http://disbott.pagu.co/#commands

### Install

To start with you'll need nodejs!

Next you'll want to clone this and then add a `.env` file to the root of the cloned folder with the following:

```
DISCORD_TOKEN=
LEAGUE_APIKEY=
LEAGUE_LOCATION=
```

You'll want to fill these in with your own values.

Once that's all sorted you can then run `npm install` to install the dependencies for the bot and webserver.

When that's all sorted you should be able to run `npm run start:bot` to start the bot or `npm run start:web` to start the websever on http://localhost:5000. For making the bot join a server you'll want to login as the user the bot will act as first and then join the server first (an easier way should be on the way soon!).

### Bot Modules

Each command the bot uses is it's own file in `/modules` if you're adding new modules you'll want to create new files (and folders if you're grouping a group of commands) for them. To then add or remove a command from the bot you'll want to modify `bot.js` either adding/removing the require statement & the function within `bot.on(message)`.

### Contributing

I know my code isn't good looking by any standards so please let me know if there are better ways for me to do things.

#### Why the disbott rather than disbot

Funny story, I broke the first disbot user. For some reason it remains connected to discord but remains unresponsive to any message whatsoever. I can't send anything as that user when logged into the discord client myself. No idea on the reason why for it still.

If you do happen to know why, please let me know!
