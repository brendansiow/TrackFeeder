var express = require('express');
var dotaAPI = express.Router();
var request = require('request');
var fs = require('fs');
var rp = require('request-promise');

dotaAPI.route('/getfeeders')
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
        rp(read_player_profile)
            .then(function (read_player) {
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
            }).catch(function (err) {
                res.render('error');
            });
    });
    module.exports = dotaAPI;