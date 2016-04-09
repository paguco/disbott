import { Config } from './../../../config';

import S from 'string';
var lolapi = require('lolapi')(Config.league.apikey, Config.league.location);
import { leagueDb } from './util/league-db';

export default function lolSetSummoner(bot, user, userID, channelID, message) {
	if (S(message).contains('lolsetsummoner')) {
		bot.simulateTyping(channelID, function () {
			var splitMessage = message.split('=');
			var summonerName = splitMessage[1];

			lolapi.Summoner.getByName(summonerName, function (error, summoner) {
				if (error) throw error;

				var summonerId = summoner[summonerName].id;
				var data = {
					discordUserId: userID,
					leagueSummonerId: summonerId,
				};

				if (leagueDb.find({
					discordUserId: userID,
				}, function (err, summoner) {
					if (S(summoner).isEmpty()) {
						leagueDb.insert(data, function (err, newData) {
							bot.sendMessage({
								to: channelID,
								message: user + ' set ' + summonerName + ' as their league account for disbot.',
							});
						});
					} else {
						leagueDb.update(
							{ discordUserId: userID },
							{ $set: { leagueSummonerId: summonerId } },
							{},
							function (err, numReplaced) {
								bot.sendMessage({
									to: channelID,
									message: user + ' set ' + summonerName + ' as their league account for disbot.',
								});
							}
						);
					}
				}));
			});
		});
	}
};
