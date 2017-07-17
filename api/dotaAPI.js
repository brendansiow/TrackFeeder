var express = require('express');
var dotaAPI = express.Router();
var request = require('request');
var fs = require('fs');
var rp = require('request-promise');

//API GETFEEDEERS
dotaAPI
    .route('/getfeeders')
    .get(function (req, res) {
        var wyid = convert32to64(85877764);
        var mhid = convert32to64(245918145);
        var hzid = convert32to64(242641190);
        var yjid = convert32to64(113935422);
        var whid = convert32to64(144690062);
        var ijoeid = convert32to64(191352380);
        function convert32to64(id) {
            result = "765" + (id * 1 + 61197960265728);
            return result;
        }
        var read_player_profile = {
            uri: 'http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002',
            qs: {
                key: '6BFDDD6115A937B10A89B660AF4CB1CA',
                steamids: wyid + "," + mhid + "," + hzid + "," + yjid + "," + whid + "," + ijoeid
            },
            json: true // Automatically parses the JSON string in the response
        };
        rp(read_player_profile).then(function (read_player) {
            for (i = 0; i < 6; i++) {
                switch (read_player.response.players[i].steamid) {
                    case wyid:
                        read_player.response.players[i].dota2id = "85877764";
                        break;
                    case mhid:
                        read_player.response.players[i].dota2id = "245918145";
                        break;
                    case hzid:
                        read_player.response.players[i].dota2id = "242641190";
                        break;
                    case yjid:
                        read_player.response.players[i].dota2id = "113935422";
                        break;
                    case whid:
                        read_player.response.players[i].dota2id = "144690062";
                        break;
                    case ijoeid:
                        read_player.response.players[i].dota2id = "191352380";
                        break;
                }
            }
            res.json(read_player.response.players);
        })
            .catch(function (err) {
                res.json('error');
            });
    });
//API GET FEEDER DETAILS
dotaAPI
    .route('/getfeeder/:playerID')
    .get(function (req, res) {
        var match_id = [];
        var match_details = []; //5 Matches details together
        var match_player_details = []; //5 matches the current player details
        var hero_name;
        var hero_img;
        var hero_name_format;
        var steamid = convert32to64(req.params.playerID);

        function convert32to64(id) {
            result = "765" + (id * 1 + 61197960265728);
            return result;
        }
        //API OPTION
        var read_match_id = {
            uri: 'https://api.steampowered.com/IDOTA2Match_570/GetMatchHistory/V001',
            qs: {
                account_id: req.params.playerID,
                key: '6BFDDD6115A937B10A89B660AF4CB1CA'
            },
            json: true // Automatically parses the JSON string in the response
        };
        var read_hero_name = {
            uri: 'https://api.steampowered.com/IEconDOTA2_570/GetHeroes/v0001',
            qs: {
                key: '6BFDDD6115A937B10A89B660AF4CB1CA',
                language: "en_us"
            },
            json: true // Automatically parses the JSON string in the response
        };
        var read_player_profile = {
            uri: 'http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002',
            qs: {
                key: '6BFDDD6115A937B10A89B660AF4CB1CA',
                steamids: steamid
            },
            json: true // Automatically parses the JSON string in the response
        };
        var read_match_details;
        //API CALL
        rp(read_match_id).then(function (last5matches) {
            for (i = 0; i < 5; i++) {
                match_id.push(last5matches.result.matches[i].match_id);
            }
            read_match_details = {
                uri: 'https://api.steampowered.com/IDOTA2Match_570/GetMatchDetails/V001',
                qs: {
                    key: '6BFDDD6115A937B10A89B660AF4CB1CA',
                    match_id: match_id[0]
                },
                json: true // Automatically parses the JSON string in the response
            };
            return rp(read_match_details);
        })
            .then(function (read_match) {
                match_details.push(read_match)
                read_match_details.qs.match_id = match_id[1];
                return rp(read_match_details)
            })
            .then(function (read_match) {
                match_details.push(read_match)
                read_match_details.qs.match_id = match_id[2];
                return rp(read_match_details)
            })
            .then(function (read_match) {
                match_details.push(read_match)
                read_match_details.qs.match_id = match_id[3];
                return rp(read_match_details)
            })
            .then(function (read_match) {
                match_details.push(read_match)
                read_match_details.qs.match_id = match_id[4];
                return rp(read_match_details)
            })
            .then(function (read_match) {
                match_details.push(read_match)
                return rp(read_hero_name);
            })
            .then(function (readheroes) {
                for (i = 0; i < 5; i++) {
                    for (y = 0; y < 10; y++) {
                        if (match_details[i].result.players[y].account_id == req.params.playerID) {
                            for (x = 0; x < Object.keys(readheroes.result.heroes).length; x++) {
                                if (match_details[i].result.players[y].hero_id == readheroes.result.heroes[x].id) {
                                    match_details[i].result.players[y].hero_name = readheroes.result.heroes[x].localized_name;
                                    match_details[i].result.players[y].hero_img = "http://media.steampowered.com/apps/dota2/images/heroes/" + (readheroes.result.heroes[x].name).replace("npc_dota_hero_", "") + "_full.png";
                                    match_details[i].result.players[y].match_id = match_details[i].result.match_id
                                }
                            }
                            if (match_details[i].result.radiant_win == true && ((match_details[i].result.players[y].player_slot).toString().length < 2)) {
                                match_details[i].result.players[y].win = "Win"
                            } else if (match_details[i].result.radiant_win == false && ((match_details[i].result.players[y].player_slot).toString().length > 1)) {
                                match_details[i].result.players[y].win = "Win"
                            } else {
                                match_details[i].result.players[y].win = "Lose"
                            }
                            match_player_details.push(match_details[i].result.players[y]);
                        }
                    }
                }
                return rp(read_player_profile);
            }).then(function(read_player) {
                 match_player_details.push({playername:read_player.response.players[0].personaname,playerphoto:read_player.response.players[0].avatarfull,playerstate:read_player.response.players[0].personastate})
                res.json(match_player_details);
            }).catch(function (err) {
                res.json("error");
            });
    });
module.exports = dotaAPI;